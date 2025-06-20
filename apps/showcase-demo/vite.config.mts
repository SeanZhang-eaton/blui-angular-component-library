/// <reference types="vitest" />

import { join } from 'node:path';

import analog from '@analogjs/platform';
import angular from '@analogjs/vite-plugin-angular';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { replaceFiles } from '@nx/vite/plugins/rollup-replace-files.plugin';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const rootDir = join(__dirname, '../..');

  return {
    root: join(rootDir, 'apps/showcase-demo'),
    base: './',
    cacheDir: '../../node_modules/.vite',
    plugins: [
      angular({ inlineStylesExtension: 'scss' }),
      nxViteTsPaths(),
      mode === 'production' &&
        replaceFiles([
          {
            replace: './src/environments/environment.ts',
            with: './src/environments/environment.prod.ts',
          },
        ]),
      viteStaticCopy({
        targets: [
          {
            src: './src/assets/*',
            dest: './assets/',
          },
        ],
      }),
    ],
    resolve: {
      mainFields: ['module'],
    },
    build: {
      target: ['es2020'],
      emptyOutDir: true,
      reportCompressedSize: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules/@angular/material')) {
              return 'angular-material';
            }

            if (id.includes('@brightlayer-ui/')) {
              return 'brightlayer-ui';
            }

            if (id.includes('node_modules/@angular/')) {
              return 'angular-core';
            }

            if (id.includes('node_modules/rxjs')) {
              return 'rxjs';
            }

            if (id.includes('node_modules/prismjs')) {
              return 'prism';
            }

            if (id.includes('node_modules/')) {
              return 'vendor';
            }
          },
          entryFileNames: mode === 'production' ? 'assets/js/[name].[hash].js' : 'assets/js/[name].js',
          chunkFileNames: mode === 'production' ? 'assets/js/[name].[hash].js' : 'assets/js/[name].js',
          assetFileNames: mode === 'production' ? 'assets/[ext]/[name].[hash].[ext]' : 'assets/[ext]/[name].[ext]',
        },
      },
    },
    server: {
      port: 4300,
      host: 'localhost',
      fs: {
        allow: ['../../'],
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
    optimizeDeps: {
      include: [
        '@angular/common',
        '@angular/core',
        '@angular/forms',
        '@angular/router',
        '@angular/material',
        'rxjs',
        'zone.js',
      ],
    },
  };
});
