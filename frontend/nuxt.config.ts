export default {
  mode: "universal",
  env: {},
  head: {
    title: "frontend",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js TypeScript project"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {
    vendor: ["vuetify"]
  },
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify"],
  plugins: ["~plugins/vuetify.ts"],
  vuetify: {
    customVariables: ["~/assets/variables.scss"]
  },
  modules: ["@nuxtjs/axios"],
  axios: {}
};
