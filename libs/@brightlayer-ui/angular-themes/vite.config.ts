import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import * as path from 'path';
import * as fs from 'fs';

// 创建临时入口文件
const tempEntryPath = path.resolve(__dirname, 'temp-entry.js');
fs.writeFileSync(tempEntryPath, '// 临时入口文件\nexport default {};\n');

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'src/lib/**/*',
                    dest: '',
                },

                {
                    src: '../../../LICENSE',
                    dest: '',
                },
                {
                    src: '../../../LICENSES.json',
                    dest: '',
                },
            ],
        }),
        {
            name: 'cleanup-temp-file',
            closeBundle(): void {
                // 清理临时入口文件
                if (fs.existsSync(tempEntryPath)) {
                    fs.unlinkSync(tempEntryPath);
                }
            },
        },
    ],
    build: {
        emptyOutDir: true,
        lib: {
            entry: tempEntryPath,
            formats: ['es'],
            fileName: () => 'index.js',
        },
        rollupOptions: {
            output: {
                // 不生成JS文件
                assetFileNames: () => 'assets/[name][extname]',
            },
        },
    },
});
