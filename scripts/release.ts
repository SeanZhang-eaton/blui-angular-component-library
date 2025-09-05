import fs from 'node:fs';
import path from 'node:path';
import pico from 'picocolors';
import semver, { ReleaseType } from 'semver';
import enquirer from 'enquirer';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { exec } from './utils.ts';
import { parseArgs } from 'node:util';
import { SpawnOptions } from 'node:child_process';

type Package = {
  name: string;
  version: string;
  dependencies?: { [dependenciesPackageName: string]: string };
  peerDependencies?: { [peerDependenciesPackageName: string]: string };
};

let versionUpdated = false;

const { prompt } = enquirer;
const currentVersion: string = createRequire(import.meta.url)('../package.json').version;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const { values: args, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    preid: {
      type: 'string',
    },
    dry: {
      type: 'boolean',
    },
    tag: {
      type: 'string',
    },
    skipBuild: {
      type: 'boolean',
    },
    skipTests: {
      type: 'boolean',
    },
    skipGit: {
      type: 'boolean',
    },
    skipPrompts: {
      type: 'boolean',
    },
    publish: {
      type: 'boolean',
      default: false,
    },
    publishOnly: {
      type: 'boolean',
    },
    registry: {
      type: 'string',
    },
  },
});

const preId = args.preid || semver.prerelease(currentVersion)?.[0];
const isDryRun = args.dry ?? false;
let skipTests = args.skipTests ?? false;
const skipBuild = args.skipBuild ?? false;
const skipPrompts = args.skipPrompts ?? false;
const skipGit = args.skipGit ?? false;
const packages = fs.readdirSync(path.resolve(__dirname, '../libs/@brightlayer-ui')).filter((p) => {
  const pkgRoot = path.resolve(__dirname, '../libs/@brightlayer-ui', p);
  if (fs.statSync(pkgRoot).isDirectory()) {
    const pkg = JSON.parse(fs.readFileSync(path.resolve(pkgRoot, 'package.json'), 'utf-8'));
    return !pkg.private;
  }
});

const keepThePackageName = (pkgName: string) => pkgName;

const skippedPackages: string[] = [];

const versionIncrements = [
  'patch',
  'minor',
  'major',
  ...((preId ? ['prepatch', 'preminor', 'premajor', 'prerelease'] : []) satisfies ReadonlyArray<ReleaseType>),
] as const satisfies ReadonlyArray<ReleaseType>;

// @ts-expect-error
const inc = (i: ReleaseType) => semver.inc(currentVersion, i, typeof preId === 'string' ? preId : undefined);

const run = async (bin: string, args: ReadonlyArray<string>, opts: SpawnOptions = {}) =>
  exec(bin, args, { stdio: 'inherit', ...opts });
const dryRun = async (bin: string, args: ReadonlyArray<string>, opts: SpawnOptions = {}) =>
  console.log(pico.blue(`[dryrun] ${bin} ${args.join(' ')}`), opts);
const runIfNotDry = isDryRun ? dryRun : run;
const getPkgRoot = (pkg: string) => path.resolve(__dirname, '../libs/@brightlayer-ui/' + pkg);
const step = (msg: string) => console.log(pico.cyan(msg));

async function main() {
  if (!(await isInSyncWithRemote())) {
    return;
  } else {
    console.log(`${pico.green(`✓`)} commit is up-to-date with remote.\n`);
  }

  let targetVersion = positionals[0] as ReleaseType | string | undefined;

  if (!targetVersion) {
    // no explicit version, offer suggestions
    const { release } = await prompt<{ release: string }>({
      type: 'select',
      name: 'release',
      message: 'Select release type',
      choices: versionIncrements.map((i) => `${i} (${inc(i)})`).concat(['custom']),
    });

    if (release === 'custom') {
      const result = await prompt<{ version: string }>({
        type: 'input',
        name: 'version',
        message: 'Input custom version',
        initial: currentVersion,
      });
      targetVersion = result.version;
    } else {
      targetVersion = release.match(/\((.*)\)/)?.[1] ?? '';
    }
  }

  // @ts-expect-error
  if (versionIncrements.includes(targetVersion)) {
    targetVersion = inc(targetVersion as ReleaseType)!;
  }

  if (!semver.valid(targetVersion)) {
    throw new Error(`invalid target version: ${targetVersion}`);
  }

  if (skipPrompts) {
    step(`Releasing v${targetVersion}...`);
  } else {
    const { yes: confirmRelease } = await prompt<{ yes: boolean }>({
      type: 'confirm',
      name: 'yes',
      message: `Releasing v${targetVersion}. Confirm?`,
    });

    if (!confirmRelease) {
      return;
    }
  }

  await runTestsIfNeeded();

  // update all package versions and inter-dependencies
  step('\nUpdating cross dependencies...');
  updateVersions(targetVersion, keepThePackageName);
  versionUpdated = true;

  // generate changelog
  step('\nGenerating changelog...');
  await run(`pnpm`, ['run', 'changelog']);

  if (!skipPrompts) {
    const { yes: changelogOk } = await prompt<{ yes: boolean }>({
      type: 'confirm',
      name: 'yes',
      message: `Changelog generated. Does it look good?`,
    });

    if (!changelogOk) {
      return;
    }
  }

  // update pnpm-lock.yaml
  step('\nUpdating lockfile...');
  await run(`pnpm`, ['install', '--prefer-offline']);

  if (!skipGit) {
    const { stdout } = await run('git', ['diff'], { stdio: 'pipe' });
    if (stdout) {
      step('\nCommitting changes...');
      await runIfNotDry('git', ['add', '-A']);
      await runIfNotDry('git', ['commit', '-m', `release: v${targetVersion}`]);
    } else {
      console.log('No changes to commit.');
    }
  }

  // publish packages
  if (args.publish) {
    await buildPackages();
    await publishPackages(targetVersion);
  }

  // push to GitHub
  if (!skipGit) {
    step('\nPushing to GitHub...');
    await runIfNotDry('git', ['tag', `v${targetVersion}`]);
    await runIfNotDry('git', ['push', 'origin', `refs/tags/v${targetVersion}`]);
    await runIfNotDry('git', ['push']);
  }

  if (!args.publish) {
    console.log(
      pico.yellow(
        '\nRelease will be done via GitHub Actions.\n' +
          'Check status at https://github.com/etn-ccis/blui-angular/actions/workflows/release.yml'
      )
    );
  }

  if (isDryRun) {
    console.log(`\nDry run finished - run git diff to see package changes.`);
  }

  if (skippedPackages.length) {
    console.log(
      pico.yellow(`The following packages are skipped and NOT published:\n- ${skippedPackages.join('\n- ')}`)
    );
  }
  console.log();
}

async function runTestsIfNeeded() {
  if (!skipTests) {
    step('Checking CI status for HEAD...');
    let isCIPassed = await getCIResult();
    skipTests ||= isCIPassed;

    if (isCIPassed) {
      if (!skipPrompts) {
        const { yes: promptSkipTests } = await prompt<{ yes: boolean }>({
          type: 'confirm',
          name: 'yes',
          message: `CI for this commit passed. Skip local tests?`,
        });
        skipTests = promptSkipTests;
      } else {
        skipTests = true;
      }
    } else if (skipPrompts) {
      throw new Error(
        'CI for the latest commit has not passed yet. ' + 'Only run the release workflow after the CI has passed.'
      );
    }
  }

  if (!skipTests) {
    step('\nRunning tests...');
    if (!isDryRun) {
      await run('pnpm', ['run', 'test:ci']);
    } else {
      console.log(`Skipped (dry run)`);
    }
  } else {
    step('Tests skipped.');
  }
}

async function getCIResult() {
  try {
    const sha = await getSha();
    type WorkflowRuns = { workflow_runs: { name: string; conclusion: string }[] };

    const res = await fetch(
      `https://api.github.com/repos/etn-ccis/blui-angular/actions/runs?head_sha=${sha}` +
        `&status=success&exclude_pull_requests=true`
    );
    const data: WorkflowRuns = await res.json();
    return data.workflow_runs.some(({ name, conclusion }) => {
      return name === 'ci' && conclusion === 'success';
    });
  } catch {
    console.error('Failed to get CI status for current commit.');
    return false;
  }
}

async function isInSyncWithRemote() {
  try {
    const branch = await getBranch();
    const res = await fetch(`https://api.github.com/repos/etn-ccis/blui-angular/commits/${branch}?per_page=1`);
    const data = await res.json();
    if (data.sha === (await getSha())) {
      return true;
    } else {
      const { yes } = await prompt<{ yes: boolean }>({
        type: 'confirm',
        name: 'yes',
        message: pico.red(`Local HEAD is not up-to-date with remote. Are you sure you want to continue?`),
      });
      return yes;
    }
  } catch {
    console.error(pico.red('Failed to check whether local HEAD is up-to-date with remote.'));
    return false;
  }
}

async function getSha() {
  return (await exec('git', ['rev-parse', 'HEAD'])).stdout;
}

async function getBranch() {
  return (await exec('git', ['rev-parse', '--abbrev-ref', 'HEAD'])).stdout;
}

function updateVersions(version: string, getNewPackageName = keepThePackageName) {
  // 1. update root package.json
  updatePackage(path.resolve(__dirname, '..'), version, getNewPackageName);
  // 2. update all packages
  packages.forEach((p) => updatePackage(getPkgRoot(p), version, getNewPackageName));
}

function updatePackage(pkgRoot: string, version: string, getNewPackageName: (pkgName: string) => string) {
  const pkgPath = path.resolve(pkgRoot, 'package.json');
  const pkg: Package = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  pkg.name = getNewPackageName(pkg.name);
  pkg.version = version;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
}

async function buildPackages() {
  step('\nBuilding all packages...');
  if (!skipBuild) {
    await run('pnpm', ['run', 'build:lib']);
  } else {
    console.log(`(skipped)`);
  }
}

async function publishPackages(version: string) {
  // publish packages
  step('\nPublishing packages...');

  const additionalPublishFlags = [];
  if (isDryRun) {
    additionalPublishFlags.push('--dry-run');
  }
  if (isDryRun || skipGit || process.env.CI) {
    additionalPublishFlags.push('--no-git-checks');
  }
  // add provenance metadata when releasing from CI
  // skip provenance if not publishing to actual npm
  if (process.env.CI && !args.registry) {
    additionalPublishFlags.push('--provenance');
  }

  for (const pkg of packages) {
    await publishPackage(pkg, version, additionalPublishFlags);
  }
}

async function publishPackage(pkgName: string, version: string, additionalFlags: ReadonlyArray<string>) {
  if (skippedPackages.includes(pkgName)) {
    return;
  }

  let releaseTag = null;
  if (args.tag) {
    releaseTag = args.tag;
  } else if (version.includes('alpha')) {
    releaseTag = 'alpha';
  } else if (version.includes('beta')) {
    releaseTag = 'beta';
  } else if (version.includes('rc')) {
    releaseTag = 'rc';
  }

  step(`Publishing ${pkgName} ${releaseTag ?? ''}...`);
  try {
    // Don't change the package manager here as we rely on pnpm to handle
    // workspace:* deps
    await run(
      'pnpm',
      [
        'publish',
        ...(releaseTag ? ['--tag', releaseTag] : []),
        '--access',
        'public',
        ...(args.registry ? ['--registry', args.registry] : []),
        ...additionalFlags,
      ],
      {
        cwd: getPkgRoot(pkgName),
        stdio: 'pipe',
      }
    );
    console.log(pico.green(`Successfully published ${pkgName}@${version}`));
  } catch (e: any) {
    if (e.message?.match(/previously published/)) {
      console.log(pico.red(`Skipping already published: ${pkgName}`));
    } else {
      throw e;
    }
  }
}

async function publishOnly() {
  const targetVersion = positionals[0];
  if (targetVersion) {
    updateVersions(targetVersion);
  }
  await buildPackages();
  await publishPackages(currentVersion);
}

const fnToRun = args.publishOnly ? publishOnly : main;

fnToRun().catch((err) => {
  if (versionUpdated) {
    // revert to current version on failed releases
    updateVersions(currentVersion);
  }
  console.error(err);
  process.exit(1);
});
