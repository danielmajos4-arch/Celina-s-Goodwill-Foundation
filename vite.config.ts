import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "client", // tells Vite that index.html is inside client/
  build: {
    outDir: "../dist", // puts the build at project root /dist
    emptyOutDir: true,
  },
  plugins: [react()],
});
