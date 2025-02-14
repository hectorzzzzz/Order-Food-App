import path from "path"
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { build } from "./node_modules/vite/dist/node/index";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});