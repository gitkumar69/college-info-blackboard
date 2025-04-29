import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for "@" to point to "src"
    },
  },
  build: {
    rollupOptions: {
      external: ["@/components/ui/sonner"], // Externalize the "sonner" module
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
});
