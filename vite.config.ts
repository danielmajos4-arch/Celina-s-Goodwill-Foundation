import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "public/assets"),
    },
  },
  build: {
    outDir: "dist", // Vercel expects "dist"
    emptyOutDir: true, // clean dist before building
  },
  server: {
    port: 3000,
    open: true, // auto-open browser when running dev
  },
});
