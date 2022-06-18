<template>
  <div class="container overflow-hidden min-w-full max-w-screen min-h-full">
    <div
      class="content flex flex-col lg:grid lg:grid-cols-2 lg:place-items-center lg:px-12 lg:py-8"
    >
      <div class="text-section flex flex-col">
        <h1 v-motion-title-left class="title-purple text-center lg:text-left">
          Who am I?
        </h1>
        <p
          v-motion-p-left
          class="md:px-20 lg:px-0 text-center lg:text-left px-4 text-lg md:text-xl  "
        >
          My name is Weronika and I am 23 years old. I’m a
          <span class="font-medium purple">front-end developer and web designer</span>
          with an interest for many technologies and with a passion to grow and
          expand my knowledge in multiple directions. I’m an aspiring full-stack
          developer with bold plans to also learn some mobile app programming.
          I’m a person who is very driven and mobilised, focused and determined.
          When I set a goal for myself, I’m doing my best to achieve it.
        </p>

        <div v-if="!bigScreen" v-motion-title-left class="img">
          <img class="about-image p-12" src="./../assets/img1.png" alt="" />
        </div>

        <div v-if="!bigScreen" v-motion-title-left class="img">
          <img
            class="w-screen p-12 lg:w-full about-image"
            src="./../assets/img2.png"
            alt=""
          />
        </div>

        <h2 v-motion-title-left class="title-red text-center lg:text-left">
          After coding
        </h2>
        <p
          v-motion-p-left
          class="px-4 md:px-20 lg:px-0 text-center lg:text-left text-lg lg:text-xl"
        >
          I have a wide variety of
          <span class="font-medium red">hobbys and interests</span> . After an
          intense day of coding, my favourite way of relaxing is to play video
          games! My favourite genre is Japanese RPG. I also love Japanese
          literature, my favourite author beeing Yukio Mishima. My biggest dream
          in life is to visit this beautiful country.
        </p>
        <div
          v-motion-title-left
          class="logos sm:px-40 lg:px-0 grid place-items-center grid-cols-3 ml-10 lg:flex"
        >
          <img class="logo" src="./../assets/ig.png" alt="" />
          <img class="logo" src="./../assets/git.png" alt="" />
          <img class="logo" src="./../assets/linked.png" alt="" />
        </div>
      </div>

      <div v-if="bigScreen" v-motion-title-right class="img grid place-items-center lg:place-items-start">
        <img class="big-image" src="./../assets/img1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    const bigScreen = ref(true);
    if (window.innerWidth > 766) bigScreen.value = true;
    else bigScreen.value = false;
    return { bigScreen };
  },
});
</script>
<style scoped>
.container {
  background: rgb(7, 17, 8);
  background: linear-gradient(
    180deg,
    rgba(7, 17, 8, 0.5396752450980392) 0%,
    rgba(220, 213, 221, 1) 9%,
    rgba(239, 235, 239, 1) 55%,
    rgba(255, 255, 255, 1) 100%
  ) !important;
}
.logo {
  width: 50px;
  height: 50px;
  margin: 20px 50px;
  margin-left: 0;
  cursor: pointer;
  transition: all 0.5s;
}
.logo:hover {
  transform: translateY(-10px);
}
.big-image {
  max-width: 600px;
}
@media screen and (min-width:1000px) {
  .big-image {
    margin-bottom: -100px;
}
}
.content {
  max-width: 1680px;
  margin: auto;
}
</style>
