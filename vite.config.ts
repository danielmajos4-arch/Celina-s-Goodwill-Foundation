import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "client", // 👈 tell Vite where index.html is
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "client/public/assets"),
    },
  },
  build: {
    outDir: "../dist", // go up one level so dist/ is at project root
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
