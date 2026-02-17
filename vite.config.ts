import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
        react(),
        svgr(),
        VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                skipWaiting: true,
                clientsClaim: true,
                cleanupOutdatedCaches: true,

                globPatterns: [
                    '**/*.{js,css,html}',
                    'images/**/*.{png,jpg,jpeg,webp,svg}'
                ],

                runtimeCaching: [
                    {
                        urlPattern: ({ request }) => request.destination === 'document',
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: 'html-cache'
                        }
                    }, {
                        urlPattern: ({ request }) =>
                            request.destination === 'script' ||
                            request.destination === 'style',
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheName: 'assets-cache'
                        }
                    }
                ]
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