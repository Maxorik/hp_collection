import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: './',
    server: {
        open: true,
    },

    build: {
        outDir: './docs',
        emptyOutDir: true
    }
});