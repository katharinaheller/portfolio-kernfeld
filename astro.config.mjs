import { defineConfig } from "astro/config";
export default defineConfig({
  site: process.env.SITE_ORIGIN || "https://katharinaheller.github.io",
  base: process.env.BASE_PATH || "/",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  devToolbar: { enabled: false },
});
