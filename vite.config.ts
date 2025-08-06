import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
            },
            devOptions: {
                enabled: true
            }
        })
    ],
    base: './',
    server: {
        open: true,
    },

    build: {
        outDir: './docs',
        emptyOutDir: true
    }
});