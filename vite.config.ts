import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "client", // entry folder where index.html lives
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "client/public/assets"),
    },
  },
  build: {
    outDir: "../dist", // output dist in project root for Vercel
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
