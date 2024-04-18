import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sentry(), spotlightjs()]
});