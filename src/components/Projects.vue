<template>
  <div
    id="proj"
    class="container overflow-hidden min-w-full max-w-screen min-h-full"
  >
    <div class="grid place-items-center gap-36 mt-12 py-12 pb-20">
      <div v-motion-titles class="box-animation">
        <h1 class="title-red title-animated">{{ $t("projects.title") }}</h1>
      </div>

      <div class="grid gap-20 grid-cols-1 lg:grid-cols-2 place-items-center">
        <project
          v-motion-title-left
          :title="$t('projects.planOrganiser.title')"
          :stack="$t('projects.planOrganiser.tools')"
          :name="'plan'"
          :link="'https://plan-organiser.netlify.app'"
          :long="$t('projects.planOrganiser.description')"
        />
        <project
          v-motion-title-right
          :title="$t('projects.water.title')"
          :stack="$t('projects.water.tools')"
          :name="'water'"
          :link="'https://nervous-galileo-8eb4db.netlify.app/'"
          :long="$t('projects.water.description')"
        />
        <project
          v-motion-title-left
          :title="$t('projects.ramen.title')"
          :stack="$t('projects.ramen.tools')"
          :name="'ramen'"
          :link="'https://cranky-ardinghelli-d6e42b.netlify.app/'"
          :long="$t('projects.ramen.description')"
        />
        <!-- <project
          v-motion-title-right
          :title="$t('projects.portfolio.title')"
          :stack="$t('projects.portfolio.tools')"
          :name="'portfolio'"
          :link="'https://elegant-ride-b1d89d.netlify.app/'"
          :long="$t('projects.portfolio.description')"
        /> -->
        <project
          v-motion-title-left
          :title="$t('projects.game.title')"
          :stack="$t('projects.game.tools')"
          :name="'game'"
          :link="'https://game-center-popular-now.netlify.app/'"
          :long="$t('projects.game.description')"
        />
        <!-- <project
          v-motion-title-right
          :title="$t('projects.tictac.title')"
          :stack="$t('projects.tictac.tools')"
          :name="'tictac'"
          :link="'https://tictactoegamewl.netlify.app/'"
          :long="$t('projects.tictac.description')"
        /> -->
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
