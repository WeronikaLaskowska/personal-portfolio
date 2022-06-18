<template>
  <div class="container h-full w-screen min-w-full bg-dark overflow-hidden">
    <bubbles />
    <div
      class="content lg:min-h-screen w-screen flex flex-col-reverse content-center items-center lg:grid lg:grid-cols-2 lg:place-items-center"
    >
      <div
        v-motion
        :initial="{
          x: -100,
          opacity: 0,
        }"
        :enter="{
          x: 0,
          opacity: 1,
          transition: {
            delay: 2000,
            type: 'spring',
            stiffness: 200,
            damping: 80,
            mass: 1.5,
          },
        }"
        class="text"
      >
        <h1 class="title font-medium underline underline-offset-16">
          Welcome!
        </h1>
        <p class="font-light">
          Welcome to my personal portfolio website. My name is Weronika. I
          love<span class="font-bold"> building and designing websites </span>
          and my dream is to grow in this direction, learn more and become the
          best that I can be.
        </p>
      </div>
      <div
        v-motion
        :initial="{
          x: 100,
          opacity: 0,
        }"
        :enter="{
          x: 0,
          opacity: 1,
          transition: {
            delay: 2000,
            type: 'spring',
            stiffness: 200,
            damping: 80,
            mass: 1.5,
          },
        }"
        class="pic"
      >
        <img
          class="profile-pic rounded-full w-4/5 sm:w-3/5 lg:w-full"
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          alt=""
        />
      </div>
    </div>
  </div>
  <about />
  <education />
  <abilities />
  <projects />
  <contact />
  <footer />
  <!-- <div class="hero_area">
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
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Bubbles from "../components/Bubbles.vue";
import About from "../components/About.vue";
import Education from "../components/Education.vue";
import Chart from "../components/Chart.vue";
import Abilities from "../components/Abilities.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

export default defineComponent({
  name: "Home",
  components: {
    Bubbles,
    About,
    Education,
    Chart,
    Abilities,
    Projects,
    Contact,
    Footer,
  },
});
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  background: linear-gradient(
    180deg,
    rgba(7, 17, 8, 0.5396752450980392) 0%,
    rgba(7, 17, 8, 1) 80%
  );
}
.title {
  font-size: 128px;
  color: #fff;
}

.content p {
  font-size: 32px;
  color: #c7dbe6;
}
.profile-pic {
  border: 15px solid #c7dbe6;
}

.content {
  width: 100%;
  max-width: 1680px;
  margin: auto;
}
img {
  max-width: 500px;
  border: 15px solid #c7dbe6;
}
@media screen and (min-width: 800px) {
  .text {
    max-width: 80vw;
  }
}
@media screen and (min-width: 1020px) {
  img {
    margin-left: 50px !important;
  }
}

@media screen and (max-width: 800px) {
  .title {
    font-size: 64px;
  }
  .text {
    width: 100vw;
  }
  .pic {
    width: 100vw;
  }
  .content {
    margin-left: 0px;
    text-align: center;
  }
  .content p {
    font-size: 25px;
    padding: 0 10px;
  }
  img {
    margin-left: 60px;
  }
}
@media screen and (min-width: 740px) {
  img {
    margin-left: 150px;
  }
  .content {
    margin-left: 50px;
  }
}
@media screen and (min-width: 640px) {
  img {
    margin-left: 130px;
  }
}

@media screen and (max-width: 500px) {
  img {
    margin-left: 40px;
  }
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
