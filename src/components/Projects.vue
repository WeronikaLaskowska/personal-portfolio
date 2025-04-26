<template>
  <div
    id="proj"
    class="container overflow-hidden min-w-full max-w-screen min-h-full"
  >
    <div class="grid place-items-center gap-36 mt-12 py-12 pb-[200px]">
      <!-- <h1 v-motion-title-left class="title">{{ $t("projects.title") }}</h1> -->
      <h1 v-motion-title-left class="title">
        {{ $t("projects.title") }}
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
            stroke="#fff"
            stroke-width="4"
            fill="none"
          />
        </svg>
      </h1>

      <div class="grid gap-20 grid-cols-1 lg:grid-cols-2 place-items-center">
        <project
          v-motion-title-left
          :title="$t('projects.seniorapp.title')"
          :stack="$t('projects.seniorapp.tools')"
          :name="'seniorapp'"
          :link="'https://seniorapp.pl/'"
          :long="$t('projects.seniorapp.description')"
        />
        <project
          v-motion-title-left
          :title="$t('projects.adrem.title')"
          :stack="$t('projects.adrem.tools')"
          :name="'adrem'"
          :link="'https://esgdataboard.com/en/'"
          :long="$t('projects.adrem.description')"
        />
        <project
          v-motion-title-left
          :title="$t('projects.planOrganiser.title')"
          :stack="$t('projects.planOrganiser.tools')"
          :name="'plan'"
          :link="'https://plan-organiser.netlify.app'"
          :long="$t('projects.planOrganiser.description')"
        />
        <!-- <project
          v-motion-title-right
          :title="$t('projects.water.title')"
          :stack="$t('projects.water.tools')"
          :name="'water'"
          :link="'https://nervous-galileo-8eb4db.netlify.app/'"
          :long="$t('projects.water.description')"
        /> -->
        <project
          v-motion-title-left
          :title="$t('projects.ramen.title')"
          :stack="$t('projects.ramen.tools')"
          :name="'ramen'"
          :link="'https://cranky-ardinghelli-d6e42b.netlify.app/'"
          :long="$t('projects.ramen.description')"
        />
        <project
          v-motion-title-right
          :title="$t('projects.portfolio.title')"
          :stack="$t('projects.portfolio.tools')"
          :name="'portfolio'"
          :link="'https://weronika-laskowska.netlify.app/'"
          :long="$t('projects.portfolio.description')"
        />
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
  padding: 0 10px;
}
.title {
  color: black;
  font-size: 128px;
  text-align: center;
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
  .title {
    font-size: 68px;
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
</style>
