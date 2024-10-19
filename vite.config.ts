import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import cssPurge from "vite-plugin-purgecss";

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "/",
  root: resolve(__dirname, "src/"),
  build: {
    emptyOutDir: true,
    outDir: "../dist",
    rollupOptions: {
      input: {
        home: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about/index.html"),
        contact: resolve(__dirname, "src/contact/index.html"),
      },
    },
  },
  // @ts-ignore
  plugins: [cssPurge({})],
});
