import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const backendPort = env.VITE_BACKEND_PORT || 5000; // Default to 5000 if not set

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: `http://localhost:${backendPort}`,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
