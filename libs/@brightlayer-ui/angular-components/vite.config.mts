/// <reference types="vitest" />
import angular from '@analogjs/vite-plugin-angular';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [angular(), nxViteTsPaths()],
    resolve: {
      mainFields: ['module'],
    },
    cacheDir: '../../../node_modules/.vite/libs/brightlayer-ui-angular-components',
    build: {
      target: ['esnext'],
      sourcemap: true,
      lib: {
        // Library entry point
        entry: 'src/public-api.ts',
        // Package output path, must contain fesm2022
        fileName: `fesm2022/brightlayer-ui-angular-components`,
        // Publish as ESM package
        formats: ['es'],
      },
      rollupOptions: {
        // Add external libraries that should be excluded from the bundle
        external: [/^@angular\/.*/, 'rxjs', 'rxjs/operators', 'color'],
        output: {
          // Produce a single file bundle
          preserveModules: false,
        },
      },
      minify: false,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
