import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { astroImageTools } from "astro-imagetools";

// NOTE: astro-imagetools fails build when uninstall astro/image and sharp in this project. This is not the case in the tutorial app.

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    astroImageTools,
  ],
  site: "https://joshua-gordon.netlify.app/",
  base: "/",
  publicDir: "./public",
});
