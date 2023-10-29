// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full scroll-smoothx bg-zinc-950 antialiased text-white",
      },
      bodyAttrs: {
        class: "h-full",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "icon",
          href: "/icon.png",
        },
      ],
    },
  },
});
