import { defineConfig } from "astro/config";
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), sitemap()],
  site: "https://joshua-gordon.netlify.app/",
  base: "/",
  publicDir: "./public"
});