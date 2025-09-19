import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "client",
  build: {
    outDir: "dist", // stays inside /client
    emptyOutDir: true,
  },
  plugins: [react()],
});
