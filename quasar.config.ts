// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from "#q-app/wrappers";

export default defineConfig((/* ctx */) => {
  return {
    boot: ["axios"],
    css: ["app.scss"],
    extras: ["material-icons"],

    build: {
      envFiles: [".env", ".env.local", ".env.test"],
      target: {
        browser: ["es2022", "firefox115", "chrome115", "safari14"],
        node: "node20",
      },

      typescript: {
        strict: true,
        vueShim: true,
      },

      vueRouterMode: "history", // available values: 'hash', 'history'
      vitePlugins: [
        [
          "vite-plugin-checker",
          {
            vueTsc: true,
            eslint: {
              lintCommand:
                'eslint -c ./eslint.config.js "./src*/**/*.{ts,js,mjs,cjs,vue}"',
              useFlatConfig: true,
            },
          },
          { server: false },
        ],
      ],
      scss: {
        additionalData: `@import "src/css/app.scss";`,
      },
    },

    devServer: {
      open: true, // opens browser window automatically
    },

    framework: {
      cssAddon: true,
      config: {
        brand: {
          "primary-100": "#009EFB",
          "primary-200": "#007DC7",
          "success-100": "#00835C",
          "info-100": "#ADADB3",
          "info-200": "#84858C",
          "info-300": "#84858C",
          "info-400": "#696A71",
          "info-500": "#58585F",
          "info-600": "#434347",
        },
      },
      plugins: [],
    },

    animations: [],

    ssr: {
      prodPort: 3000,
      middlewares: [
        "render", // keep this as last one
      ],
      pwa: false,
    },

    pwa: {
      workboxMode: "GenerateSW", // 'GenerateSW' or 'InjectManifest'
    },

    cordova: {},

    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      preloadScripts: ["electron-preload"],
      inspectPort: 5858,
      bundler: "packager", // 'packager' or 'builder'
      packager: {},

      builder: {
        appId: "hotel-listing-app",
      },
    },

    bex: {
      /**
       * The list of extra scripts (js/ts) not in your bex manifest that you want to
       * compile and use in your browser extension. Maybe dynamic use them?
       *
       * Each entry in the list should be a relative filename to /src-bex/
       *
       * @example [ 'my-script.ts', 'sub-folder/my-other-script.js' ]
       */
      extraScripts: [],
    },
  };
});
