# Release Guide for blui-angular

## Usage

### 1. Basic Release Process

```bash
# Release a new patch version (10.0.0 -> 10.0.1)
pnpm tsx scripts/release.ts patch

# Release a new minor version (10.0.0 -> 10.1.0)
pnpm tsx scripts/release.ts minor

# Release a new major version (10.0.0 -> 11.0.0)
pnpm tsx scripts/release.ts major

# Interactive version selection
pnpm tsx scripts/release.ts
```

### 2. Pre-release Versions

```bash
# Release an alpha version
pnpm tsx scripts/release.ts prerelease --preid alpha

# Release a beta version
pnpm tsx scripts/release.ts prerelease --preid beta

# Release an rc version
pnpm tsx scripts/release.ts prerelease --preid rc
```

### 3. Advanced Options

```bash
# Dry run mode (shows commands without executing)
pnpm tsx scripts/release.ts patch --dry

# Skip tests
pnpm tsx scripts/release.ts patch --skipTests

# Skip build
pnpm tsx scripts/release.ts patch --skipBuild

# Skip Git operations
pnpm tsx scripts/release.ts patch --skipGit

# Skip all prompts
pnpm tsx scripts/release.ts patch --skipPrompts

# Publish directly to npm
pnpm tsx scripts/release.ts patch --publish

# Publish an existing version only (no version bump)
pnpm tsx scripts/release.ts --publishOnly

# Specify publish tag
pnpm tsx scripts/release.ts patch --publish --tag beta

# Specify registry
pnpm tsx scripts/release.ts patch --publish --registry https://registry.npmjs.org
```

## Example Workflow

```bash
# 1. Make sure your code is up to date
git pull origin main

# 2. Run a dry release check
pnpm tsx scripts/release.ts patch --dry

# 3. If everything is fine, perform the actual release
pnpm tsx scripts/release.ts patch --publish
```
