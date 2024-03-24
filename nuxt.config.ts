export default {
  ssr: false,
  target: "static",
  app: {
    head: {
      title: "National Profile Admin",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: ['/assets/css/main.css'],
  tailwindcss: {
		cssPath: '@/assets/css/main.css'
	},
};
