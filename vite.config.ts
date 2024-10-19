import { defineConfig } from 'vite';

import path from 'path';

export default defineConfig({
    publicDir: '../../public/',
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
