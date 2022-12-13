import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";

import sitemap from "@astrojs/sitemap";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(),
    /*     image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }), */
    astroImageTools,
  ],
  site: "https://joshua-gordon.netlify.app/",
  base: "/",
  publicDir: "./public",
});
