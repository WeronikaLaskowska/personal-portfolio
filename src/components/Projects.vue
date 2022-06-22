<template>
  <div id="proj" class="container overflow-hidden min-w-full max-w-screen min-h-full">
    <div class="grid place-items-center gap-36 mt-12 py-12 pb-20">
      <div v-motion-titles class="box-animation">
        <h1 class="title-red title-animated">My projects</h1>

      </div>

      <div class="grid gap-20 grid-cols-1 lg:grid-cols-2 place-items-center">
        <project
          v-motion-title-left
          :title="'Web App - Plan Organiser'"
          :stack="'Vue 2.0 - Vue Router - Firebase'"
          :name="'plan'"
          :link="'https://plan-organiser.netlify.app'"
          :long="'Web app created for my university thesis. It was created for teachers and employees of primary and secondary schools. Its aim is to facilitate the activities of creating a lesson plan.Plan Organiser is a web tool written in JavaScript, using the Vue.js framework.'"
        />
        <project
          v-motion-title-right
          :title="'Website - Save Water'"
          :stack="'HTML - CSS - Sass'"
          :name="'water'"
          :link="'https://nervous-galileo-8eb4db.netlify.app/'"
          :long="'Website created for fun and to practise some advanced CSS concepts using Sass preprocessor'"
        />
        <project
          v-motion-title-left
          :title="'Website - NEKO Ramen'"
          :stack="'React - Framer Motion - Styled components'"
          :name="'ramen'"
          :link="'https://cranky-ardinghelli-d6e42b.netlify.app/'"
          :long="'Website for a fictional Japanese restaurant serving Ramen. Made using React framework and its libraries. Im a ramen lover so making this one was a pleasure!'"
        />
        <project
          v-motion-title-right
          :title="'Portfolio Website'"
          :stack="'JavaScript - css - HTML'"
          :name="'portfolio'"
          :link="'https://elegant-ride-b1d89d.netlify.app/'"
          :long="'My old portfolio website made about 6 months ago. Check out my progress!'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Chart from "./Chart.vue";
import Project from "./Project.vue";
export default defineComponent({
  name: "Projects",
  components: { Chart, Project },
});
</script>
<style scoped>
.container {
  background: #ffdedd !important;
}
</style>
