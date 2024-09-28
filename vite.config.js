import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";

export default defineConfig({
  root: "src/",
  server: {
    open: "/pages/",
    port: 3000,
  },
  plugins: [
    Pages(),
  ],
});
