import path from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@errors": path.resolve(__dirname, "./src/modules/errors"),
      "@factories": path.resolve(__dirname, "./src/modules/factories"),
      "@services": path.resolve(__dirname, "./src/modules/services"),
      "@usecases": path.resolve(__dirname, "./src/modules/usecases"),
      "@components": path.resolve(__dirname, "./src/presenters/components"),
      "@contexts": path.resolve(__dirname, "./src/presenters/contexts"),
      "@layouts": path.resolve(__dirname, "./src/presenters/layouts"),
      "@middlewares": path.resolve(__dirname, "./src/presenters/middlewares"),
      "@pages": path.resolve(__dirname, "./src/presenters/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
})
