import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/React-router-github-practice",
  plugins: [react()],
  server: {
    port: 3005,
  },
});
