<template>
  <div v-motion-titles class="wrapper">
    <!-- Moved hero_area to the top with original color -->
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
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
    <div
      class="text-center container  pb-[200px] justify-center overflow-hidden min-w-full max-w-screen mx-auto min-h-full"
    >
      <div class="flex flex-row gap-4 justify-center items-start">
        <div class="grid px-10">
          <!-- <h1 v-motion-title-left class="title">{{ $t("home.hello") }}</h1> -->
          <h1 v-motion-title-left class="title">
            {{ $t("home.hello") }}
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
          <p v-motion-title-left class="text-left max-w-[600px]">
            {{ $t("home.intro") }}
          </p>
          <!-- <img class="mt-4 contact-img" src="./../assets/contact.png" alt="" /> -->
        </div>
        <div v-motion-title-right class="">
          <img class="contact-img" src="./../assets/landing.png" alt="" />
        </div>
      </div>
    </div>
    <div class="wave"></div>

    <!-- Removed the wave div that was here -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Abilities",
  setup() {
    const mailto = () => {
      window.location.href = "mailto:laskowska29@gmail.com";
    };
    return { mailto };
  },
});
</script>
<style scoped>
.wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
/* Removed .wave class */

.hero_area {
  position: relative;
  /* Changed from 0vh to 15vh to make it visible */
  height: 15vh;
  min-height: 150px;
  /* Changed from black to #ffdedd (the original color from your wave div) */
  background-color: #ffdedd;
  opacity: 0.5;
}

.waves {
  position: absolute;
  width: 100%;
  height: 15vh;
  min-height: 100px;
  max-height: 150px;
  /* Changed from bottom: 0 to bottom: -1px to connect with content */
  bottom: -1px;
  left: 0;
}
.wave {
  position: absolute;
  bottom: 0;
  clip-path: polygon(
    100% 0%,
    0% 0%,
    0% 65%,
    1% 64.95%,
    2% 64.8%,
    3% 64.6%,
    4% 64.3%,
    5% 63.9%,
    6% 63.45%,
    7% 62.9%,
    8% 62.25%,
    9% 61.55%,
    10% 60.8%,
    11% 59.95%,
    12% 59.05%,
    13% 58.1%,
    14% 57.1%,
    15% 56.05%,
    16% 55%,
    17% 53.9%,
    18% 52.8%,
    19% 51.65%,
    20% 50.5%,
    21% 49.35%,
    22% 48.2%,
    23% 47.05%,
    24% 45.9%,
    25% 44.8%,
    26% 43.75%,
    27% 42.75%,
    28% 41.75%,
    29% 40.8%,
    30% 39.9%,
    31% 39.1%,
    32% 38.35%,
    33% 37.65%,
    34% 37.05%,
    35% 36.5%,
    36% 36.05%,
    37% 35.65%,
    38% 35.35%,
    39% 35.15%,
    40% 35.05%,
    41% 35%,
    42% 35.05%,
    43% 35.2%,
    44% 35.45%,
    45% 35.75%,
    46% 36.15%,
    47% 36.65%,
    48% 37.2%,
    49% 37.85%,
    50% 38.55%,
    51% 39.35%,
    52% 40.2%,
    53% 41.1%,
    54% 42.05%,
    55% 43.05%,
    56% 44.1%,
    57% 45.15%,
    58% 46.3%,
    59% 47.4%,
    60% 48.55%,
    61% 49.7%,
    62% 50.85%,
    63% 52%,
    64% 53.15%,
    65% 54.25%,
    66% 55.35%,
    67% 56.4%,
    68% 57.45%,
    69% 58.4%,
    70% 59.35%,
    71% 60.2%,
    72% 61.05%,
    73% 61.8%,
    74% 62.45%,
    75% 63.05%,
    76% 63.6%,
    77% 64.05%,
    78% 64.4%,
    79% 64.7%,
    80% 64.85%,
    81% 65%,
    82% 65%,
    83% 64.9%,
    84% 64.75%,
    85% 64.5%,
    86% 64.2%,
    87% 63.75%,
    88% 63.25%,
    89% 62.7%,
    90% 62.05%,
    91% 61.3%,
    92% 60.5%,
    93% 59.65%,
    94% 58.75%,
    95% 57.8%,
    96% 56.8%,
    97% 55.75%,
    98% 54.65%,
    99% 53.55%,
    100% 52.4%
  );
  height: 300px;
  width: 100%;
  z-index: 1;
  background: #ffdedd;
  transform: rotateZ(180deg);
  opacity: 0.5;
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

  .hero_area {
    height: 8vh;
    min-height: 80px;
  }
}

.contact-img {
  z-index: 2;
  width: 500px;
}
.container {
  background: #fff !important;
  position: relative;
  z-index: 1;
}
.title {
  color: black;
  font-size: 128px;
  text-align: left;
  padding-bottom: 20px;
}
/* .title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 8px;
  background: linear-gradient(90deg, #ffc6c6, #ffdedd);
  border-radius: 4px;
  margin-bottom: 50px;

  animation: underline-animation 1.5s forwards 0.5s;
}

@keyframes underline-animation {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
} */

.title {
  position: relative;
  display: inline-block;
  margin-bottom: 40px;
}

.title-underline {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  overflow: visible;
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
@media screen and (max-width: 1000px) {
  .title {
    font-size: 92px;
  }
}
@media screen and (max-width: 700px) {
  .title {
    font-size: 72px;
  }
}
@media screen and (max-width: 500px) {
  .title {
    font-size: 52px;
  }
}
</style>
