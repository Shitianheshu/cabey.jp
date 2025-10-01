import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com/macros/s/AKfycbyIqsKRANwDwWkZ4e9BzTfFJvstLBmhVw_doFExzf2deS1WycK36F9bj2F7urkSLanivA/exec',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
