import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "happy-dom",
    setupFiles: "test/vitest/setup-file.ts",
    include: [
      "src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
      "test/vitest/__tests__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
    ],
    unstubEnvs: true,
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: "src/quasar-variables.scss",
    }),
    tsconfigPaths(),
  ],
});
