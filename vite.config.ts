import { defineConfig } from 'vite';

export default defineConfig({
    base: '/teagle-dealer-finder',

    root: './src',

    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                index: './src/index.html',
                contact: './src/contact.html',
                contactIframe: './src/contact-iframe.html',
            },
        },
    },
});
