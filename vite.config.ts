import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3001,
    host: true, // Allows access from LAN
  },
  base: mode === 'production' ? '/' : '', // Adjust base path for production deployment
  publicDir: 'public',
  build: {
    outDir: 'dist',
    sourcemap: mode === 'production' ? false : true, // Disable source maps in production for smaller build size
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash].[ext]', // Ensures hashed file names
      },
    },
  },
}));
