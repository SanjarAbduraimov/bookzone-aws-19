import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'src/',
  server: {
    open: '/pages/',
    port: 3000
  },
});
