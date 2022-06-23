<template>
  <div class="things w-screen h-full grid place-items-center">
    <div   v-motion
      :initial="{
        y: 1000,
        opacity: 0,
      }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: {
          delay: 1200,
          stiffness: 200,
          damping: 80,
          mass: 3.5,
          ease: 'linear',
        
        },
      }" class="text-content">
      <h1 class="section-title underline">Hello!</h1>
      <h2>My name is <span class="effect font-bold">Weronika</span></h2>
      <p>I enjoy building and designing things for the web.</p>
    </div>
    <div   v-motion
      :initial="{
        y: 1000,
        opacity: 0,
      }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: {
          delay: 1200,
          stiffness: 200,
          damping: 80,
          mass: 3.5,
          ease: 'linear',
        
        },
      }" class="typewriter">
      <VueWriter :array="arr" />
    </div>
    <div
      v-motion
      :initial="{
        y: 1000,
        opacity: 0,
      }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: {
          delay: 1000,
          stiffness: 200,
          damping: 80,
          mass: 3.5,
          ease: 'linear',
        
        },
      }"
      
      class="float bubble-large absolute rounded-full"
    ></div>
    <div
      v-motion
      :initial="{
        y: 1000,
        opacity: 0,
      }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: {
          delay: 1300,
          stiffness: 200,
          damping: 80,
          mass: 3.5,
          ease: 'linear',
        },
      }"
      class="float bubble-medium absolute rounded-full"
    ></div>
    <div
      v-motion
      :initial="{
        y: 1000,
        opacity: 0,
      }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: {
          delay: 1100,
          stiffness: 200,
          damping: 80,
          mass: 3.5,
          ease: 'linear',
        },
      }"
      class="float bubble-small absolute rounded-full"
    ></div>
  </div>
</template>
<script lang="ts">
import { useMotion } from "@vueuse/motion";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "LeftSide",
  setup() {
    let arr = [
      "FRONT-END DEVELOPER",
      "WEB DESIGNER",
      "PROGRAMMER",
      "UX/UI DESIGNER",
    ];

    return { arr };
  },
});
</script>
<style scoped>
.text-content,
.typewriter {
  max-width: 600px;
  position: relative;
  margin-left: 200px;
  margin-top: 150px;
  z-index: 9999;
  color: #fff;
  font-size: 90px;
}
.typewriter {
  font-size: 32px;
  max-width: 220px;
  margin-left: 400px;
  margin-top: 50px;
  font-weight: 100;
  text-align: center;
}

.text-content p {
  font-size: 18px;
}
.text-content h2 {
  font-size: 32px;
  transition: 0.5s;
}
.effect {
  transition: 0.5s;
}
.effect:hover {
  letter-spacing: 10px;
}
.bubble-large,
.bubble-medium,
.bubble-small {
  width: 400px;
  height: 400px;
  background: rgba(236, 97, 91, 0.2);
  top: 80px;
  left: 100px;
  transition: 0.5s;
}
.bubble-large::after,
.bubble-medium::after,
.bubble-small::after {
  content: "";
  position: absolute;
  border-radius: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 80%;
  width: 80%;
  transition: 0.5s;
  background: rgb(236, 97, 91);
}
.bubble-large:hover,
.bubble-medium:hover,
.bubble-small:hover {
  transform: translateY(25px);
}
.bubble-large:hover::after,
.bubble-medium:hover::after,
.bubble-small:hover::after {
  height: 100%;
  width: 100%;
}

.bubble-medium {
  width: 250px;
  height: 250px;
  background: rgba(82, 34, 208, 0.2);
  top: 330px;
  left: 500px;
}
.bubble-medium::after {
  background: rgb(82, 34, 208);
}
.bubble-small {
  width: 150px;
  height: 150px;
  background: rgba(220, 213, 221, 0.2);
  top: 530px;
  left: 350px;
}
.bubble-small::after {
  background: rgb(220, 213, 221);
}

@media screen and (max-width: 1380px) {
  .bubble-large,
  .bubble-medium,
  .bubble-small {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
  .text-content {
    position: absolute;
    left: 200px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 20px;
  }
  .typewriter {
    position: absolute;
    left: 240px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
  }
  .bubble-large {
    top: 100px;
    left: -250px;
  }
  .bubble-medium {
    top: 380px;
    left: 300px;
  }
  .bubble-small {
    top: 550px;
    left: -100px;
  }
}
@media screen and (max-width: 750px) {
  .text-content {
    left: 100px;
  }
}
@media screen and (max-width: 650px) {
  .bubble-large {
    width: 300px;
    height: 300px;
  }
  .bubble-large {
    top: 100px;
    left: -100px;
  }

  .bubble-medium {
    width: 200px;
    height: 200px;
  }
  .bubble-medium {
    top: 320px;
    left: 300px;
  }
  .bubble-small {
    top: 450px;
    left: -10px;
  }
  .text-content p {
    font-size: 16px;
  }
  .text-content h2 {
    font-size: 26px;
  }
  .text-content {
    font-size: 62px;
    left: 120px;
  }
  .typewriter {
    margin-top: 20px;
    font-size: 21px;
  }
}
@media screen and (max-width: 500px) {
  .text-content {
    left: 40px;
    margin-right: 50px;
  }
  .bubble-large {
    width: 260px;
    height: 260px;
  }
  .bubble-large {
    top: 140px;
    left: -100px;
  }
  .bubble-medium {
    top: 380px;
    left: 140px;
  }
  .bubble-medium {
    width: 200px;
    height: 200px;
  }

  .bubble-small {
    top: 580px;
    left: -50px;
  }

  .typewriter {
    margin-top: 40px;
    left: 0;
    font-size: 24px;
  }
}
</style>
