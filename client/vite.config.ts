import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: './',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: true,
  },
  resolve: {
    alias: {
      '@the-last-signal/shared': path.resolve(__dirname, '../shared/src'),
    },
  },
});
