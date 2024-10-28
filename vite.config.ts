import { defineConfig } from 'vite';

export default defineConfig({
    base: '/teagle-dealer-finder',

    root: './src',

    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                index: './src/index.html',
                about: './src/contact.html',
            },
        },
    },
});
