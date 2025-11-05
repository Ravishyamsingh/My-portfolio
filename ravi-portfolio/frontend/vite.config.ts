import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Vite configuration tailored for the portfolio frontend
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,
  },
});
