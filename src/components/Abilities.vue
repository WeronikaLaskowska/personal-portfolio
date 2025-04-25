<template>
  <div
    id="abi"
    class="container overflow-hidden min-w-full max-w-screen min-h-full"
  >
    <div class="grid place-items-center my-20">
   
      <h1 v-motion-title-left class="title">
        {{ $t("abilities.title") }}
        <svg
          class="title-underline"
          width="100%"
          height="15"
          viewBox="0 0 100 15"
          preserveAspectRatio="none"
        >
          <path
            class="path"
            d="M0,5 Q25,0 50,5 T100,5"
            stroke="#ffc6c6"
            stroke-width="4"
            fill="none"
          />
        </svg>
      </h1>
      <!-- <h1 v-motion-title-left class="title">{{ $t("abilities.title") }}</h1> -->

      <!-- <div v-motion-titles class="learning flex ml-20 sm:ml-6 lg:ml-0">
        <div class="box mr-4"></div>
        <p>- {{ $t("abilities.learning") }}</p>
      </div> -->
      <div class="py-12 mt-[70px] pb-[100px]">
        <chart />
      </div>
    </div>
  </div>
  <div class="hero_area">
    <svg
      class="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="0"
          fill="rgba(255,222,221,0.7"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="3"
          fill="rgba(255,222,221,0.5)"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="5"
          fill="rgba(255,222,221,0.3)"
        />
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
  background: #ffeeee !important;
  background: linear-gradient(
    180deg,
    rgba(255, 238, 238, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  ) !important;
}
.title {
  color: black;
  font-size: 128px;
  text-align: left;
  padding-left: 20px;
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

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
.title-underline {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  overflow: visible;
  padding-left: 20px;

}

.path {
  stroke-dasharray: 120;
  stroke-dashoffset: 120;
  animation: draw 1.5s forwards 0.3s cubic-bezier(0.76, 0, 0.24, 1);
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

/* Dodaj ten fragment, aby podkreślenie było responsywne */
@media screen and (max-width: 1000px) {
  .title-underline {
    bottom: -8px;
  }
}
@media screen and (max-width: 700px) {
  .title-underline {
    bottom: -6px;
  }
}
@media screen and (max-width: 500px) {
  .title-underline {
    bottom: -5px;
  }
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}

@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
}
</style>
