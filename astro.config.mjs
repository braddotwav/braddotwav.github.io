import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import minify from "astro-min";

export default defineConfig({
  site: "https://braddotwav.github.io",
  integrations: [
    icon(),
    minify({
      keep_comments: false,
      keep_closing_tags: true,
      ensure_spec_compliant_unquoted_attribute_values: true,
      minify_css: true,
      minify_js: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'always',
  },
});
