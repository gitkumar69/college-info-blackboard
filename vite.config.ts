import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // ... other config
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Assuming your source files are in 'src'
    },
  },
});