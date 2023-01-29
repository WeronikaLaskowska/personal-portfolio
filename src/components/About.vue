<template>
  <div
    id="about"
    class="container overflow-hidden min-w-full max-w-screen min-h-full lg:min-h-screen"
  >
    <div
      class="content flex flex-col lg:grid lg:grid-cols-2 lg:place-items-center lg:px-12 lg:py-8 pt-20"
    >
      <div class="text-section flex flex-col">
        <h1 v-motion-title-left class="title-purple text-center lg:text-left">
          {{ $t("about.title") }}
        </h1>
        <p
          v-motion-p-left
          class="md:px-20 lg:px-0 text-center lg:text-left px-4 text-lg md:text-xl set-background"
        >
          {{ $t("about.aboutMe") }}
          <span class="font-medium purple">
            {{ $t("about.aboutMeDistinct") }}</span
          >
          {{ $t("about.aboutMe2") }}
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
          {{ $t("about.after") }}
        </h2>
        <p
          v-motion-p-left
          class="px-4 md:px-20 lg:px-0 text-center lg:text-left text-lg lg:text-xl set-background"
        >
          {{ $t("about.hobbys") }}
          <span class="font-medium red"> {{ $t("about.hobbysDistinct") }}</span
          >{{ $t("about.hobbys2") }}
        </p>
        <div
          v-motion-title-left
          class="logos sm:px-40 lg:px-0 grid place-items-center grid-cols-3 ml-10 lg:flex"
        >
          <img
            @click="redirect('ig')"
            class="logo"
            src="./../assets/ig.png"
            alt=""
          />

          <img
            @click="redirect('git')"
            class="logo"
            src="./../assets/git.png"
            alt=""
          />
          <img
            @click="redirect('linked')"
            class="logo"
            src="./../assets/linked.png"
            alt=""
          />
        </div>
      </div>

      <div
        v-if="bigScreen"
        v-motion-title-right
        class="img grid place-items-center lg:place-items-start"
      >
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

    const redirect = (to: any) => {
      if (to === "git")
        window.open("https://github.com/WeronikaLaskowska", "_blank");
      if (to === "linked")
        window.open(
          "https://pl.linkedin.com/in/weronika-laskowska-808382219",
          "_blank"
        );
      if (to === "ig") location.href = "https://seniorapp.pl/";
    };
    return { bigScreen, redirect };
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
.content {
  max-width: 1680px;
  margin: auto;
}
.big-image {
  max-width: 600px;
}
@media screen and (min-width: 1000px) {
  .big-image {
    margin-bottom: -100px;
  }
}
</style>
