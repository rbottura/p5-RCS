// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: './', // Adjust base if deploying to a subpath
  server: {
    port: 3000, // You can specify the port if desired
  },
});
