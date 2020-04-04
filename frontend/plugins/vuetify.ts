import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader version "^2.1.1" ,
Vue.use(Vuetify);

export default (ctx: any) => {
  const vuetify = new Vuetify({
    /* module options */
    theme: {
      dark: true,
      options: {
        customProperties: true
      },
      themes: {
        light: {
          primary: "#058248",
          secondary: "#75aa1e",
          accent: "#3A1802",
          error: "#fc0002",
          warning: "#fdaa04",
          text: "#1d1e1e",
          background: "#f0f0f0",
          cardBg: "#969b99",
          roomCardBg: "#FFFFFF"
        },
        dark: {
          primary: "#056432",
          secondary: "#679d21",
          accent: "#1c0d02",
          error: "#de0002",
          warning: "#e09b04",
          text: "#000000",
          background: "#373737",
          cardBg: "#787d7b",
          roomCardBg: "#323232"
        }
      }
    },
    icons: {
      iconfont: "fa"
    }
  });

  ctx.app.vuetify = vuetify;
  ctx.$vuetify = vuetify.framework;
};
