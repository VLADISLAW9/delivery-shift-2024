import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'default'
      },
      include: '**/*.svg'
    })
  ],
  publicDir: path.resolve(__dirname, './src/shared/assets'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
});