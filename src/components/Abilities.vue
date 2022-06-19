<template>
  <div id="abi" class="container overflow-hidden min-w-full max-w-screen min-h-full">
    <div class="grid  sm:place-items-center my-20">
      <div v-motion
           :initial="{
          opacity: 0,
        }"
           :visible="{
          opacity: 1,
          transition: {
            opacity: {
              duration: 1000,
            },
          },
        }" class="box-animation mb-12 ml-12 sm:ml-0">
        <h1

            class=" title-purple-edu ml-4 lg:ml-0"
        >
          My abilities
        </h1>
      </div>

      <div  v-motion
        :initial="{
          opacity: 0,
        }"
        :visible="{
          opacity: 1,
          transition: {
            opacity: {
              duration: 1000,
            },
          },
        }" class="learning flex ml-20 sm:ml-6 lg:ml-0">
        <div class="box mr-4"></div>
        <p>- currently learning</p>
      </div>
      <div class="py-12">
        <chart />
      </div>
    </div>
  </div>
   <div class="hero_area">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,222,221,0.7" />
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,222,221,0.5)" />
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,222,221,0.3)" />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="#ffdedd" />
            </g>
        </svg>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Chart from "./Chart.vue";
export default defineComponent({
  name: "Abilities",
  components: { Chart },
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
  background: rgb(191, 177, 193);
  background: linear-gradient(
    180deg,
    rgba(191, 177, 193, 1) 0%,
    rgba(255, 255, 255, 1) 44%,
    rgba(255, 255, 255, 1) 85%
  ) !important;
}
.box {
  width: 30px;
  height: 30px;
  background: #ec615b;
}

.hero_area {
    position: relative;
    height: 0vh;
    background-color: black;
}

.waves {
    position: absolute;
    width: 100%;
    height: 15vh;
    min-height: 100px;
    max-height: 150px;
    bottom: 0;
    left: 0;
}

.parallax>use {
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax>use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
}

.parallax>use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
}

.parallax>use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
}

.parallax>use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
}

@keyframes move-forever {
    0% {
        transform: translate3d(-90px, 0, 0);
    }

    100% {
        transform: translate3d(85px, 0, 0);
    }
}


/*Shrinking for mobile*/

@media (max-width: 768px) {
    .waves {
        height: 40px;
        min-height: 40px;
    }
}

</style>
