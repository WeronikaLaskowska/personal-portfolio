import { createApp } from "vue";
import { createI18n } from 'vue-i18n'
import App from "./App.vue";
import "./index.css";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";
import VueWriter from "vue-writer";
import pl from "./i18n/pl"
import en from "./i18n/en"
const app = createApp(App).use(router).use(VueWriter);
const i18n = createI18n({
  locale: window.localStorage.getItem('lan') as string, // set locale
  fallbackLocale: 'en', // set fallback locale
  messages:{
    en:en,
    pl:pl
  }, 
  // something vue-i18n options here ...
})
app.use(i18n)
app.use(MotionPlugin, {
  directives: {
    "title-left": {
      initial: {
        x: -200,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 800,
        },
      },
      
    },
    "title-right": {
      initial: {
        x: 200,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 800,
        },
      },
    },
    "p-left": {
      initial: {
        x: -200,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 1200,
        },
      },
    },
    "p-left-delay": {
      initial: {
        x: -200,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 2000,
          type: 'spring',
          stiffness: 2020,
          damping: 810,
          mass: 3.5,
        },
      },
    },
    "p-right": {
      initial: {
        x: 200,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 1200,
          
        },
      },
    },
    "titles": {
      initial: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          opacity: {
            duration: 1000,
          },
      },
    },
  },
    "small-graph1": {
      initial: {
        scaleY: 0,
      },
      visible: {
        scaleY: 15,
        transition: {
          duration: 2000,
          ease: "linear",
        },
      },
    },
    "small-graph2": {
      initial: {
        scaleY: 0,
      },
      visible: {
        scaleY: 16,
        transition: {
          duration: 2000,
          ease: "linear",
        },
      },
    },
    "small-graph3": {
      initial: {
        scaleY: 0,
      },
      visible: {
        scaleY: 17,
        transition: {
          duration: 2000,
          ease: "linear",
        },
      },
    },
    "small-graph4": {
      initial: {
        scaleY: 0,
      },
      visible: {
        scaleY: 19,
        transition: {
          duration: 2000,
          ease: "linear",
        },
      },
    },
    "medium-graph": {
      initial: {
        scaleY: 0,
      },
      visible: {
        scaleY: 25,
        transition: {
          duration: 2000,
          ease: "linear",
        },
      },
    },
    "large-graph1": {
      initial: {
        scaleY: 0,
      },
      visible: {
        scaleY: 35,
        transition: {
          duration: 2000,
          ease: "linear",
        },
      },
    },
    "large-graph2": {
      initial: {
        scaleY: 0,
      },
      visible: {
        scaleY: 39,
        transition: {
          duration: 2000,
          ease: "linear",
        },
      },
    },
    "large-graph3": {
      initial: {
        scaleY: 0,
      },
      visible: {
        scaleY: 55,
        transition: {
          duration: 2000,
          ease: "linear",
        },
      },
    },
    "large-graph4": {
      initial: {
        scaleY: 0,
      },
      visible: {
        scaleY: 65,
        transition: {
          duration: 2000,
          ease: "linear",
        },
      },
    },
    "large-graph5": {
      initial: {
        scaleY: 0,
      },
      visible: {
        scaleY: 70,
        transition: {
          duration: 2000,
          ease: "linear",
        },
      },
    },
    "max-graph": {
      initial: {
        scaleY: 0,
      },
      visible: {
        scaleY: 90,
        transition: {
          duration: 2000,
          ease: "linear",
        },
      },
    },

  },
});

app.mount("#app");
