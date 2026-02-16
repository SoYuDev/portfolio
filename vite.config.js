import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Define your entry points here
        // The key is the chunk name (e.g., 'main', 'about')
        // The value is the path to the HTML file
        main: resolve(__dirname, 'index.html'),
        proyectos: resolve(__dirname, 'proyectos.html'),
      },
    },
  },
  // Other Vite config options...
});