import { resolve } from "path";

import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "dummy-component",
      formats: ["es"],
      // the proper extensions will be added
      fileName: "dummy-component",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      }
    },
  },
  plugins: [
    dts({
      tsConfigFilePath: resolve(__dirname, "tsconfig.prod.json")
    }),
    vue()
  ],
})
