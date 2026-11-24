import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages without a custom domain: https://norin-web.github.io/googletv1/
  // When a custom domain is attached, switch to "/" AND add public/CNAME in the same commit.
  // If the domain is removed again, switch back to "/googletv1/" or every asset 404s.
  base: "/googletv1/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
