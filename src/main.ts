import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App).use(router);

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
        scaleY: 42,
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
        scaleY: 50,
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
        scaleY: 60,
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
