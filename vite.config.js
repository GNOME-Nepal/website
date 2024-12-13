import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  server:
    command === "serve"
      ? {
          proxy: {
            "/docs": "http://localhost:3000",
          },
        }
      : {},
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
