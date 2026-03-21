import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@i18n": "/src/i18n",
      "@app": "/src/app",
      "@store": "/src/store",
    },
  },
});
