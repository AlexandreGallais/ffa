import { defineConfig } from 'vite';

import path from 'path';

export default defineConfig({
    publicDir: '../../static/assets/',
    build: {
        manifest: true,
        minify: true,
        reportCompressedSize: true,
        lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            fileName: 'main',
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: [],
            plugins: [],
        },
    },
});
