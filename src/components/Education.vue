<template>
  <div
    id="edu"
    class="container min-w-full min-h-full pb-20 grid place-items-center  overflow-hidden max-w-screen"
  >
    <div
      class="content py-12 pb-[200px] flex flex-col lg:grid lg:grid-cols-2 lg:place-items-center lg:px-12 "
    >
      <div
        v-motion-title-left
        class="img grid place-items-center lg:place-items-start"
      >
        <img class="big-image" src="./../assets/img3.png" alt="" />
      </div>
      <div class="text-section flex flex-col">
        <h1 v-motion-title-right class="title-purple text-center lg:text-right">
          {{ $t("edu.title") }}
        </h1>
        <p
          v-if="lang === 'en'"
          v-motion-p-right
          class="md:px-20 lg:px-0 text-center lg:text-right px-4 text-md lg:text-md set-background"
        >
          {{ $t("edu.education").substring(0, 29) }}
          <span @click="redirect('uni')" class="clickable">{{
            $t("edu.education").substring(29, 48)
          }}</span>
          {{ $t("edu.education").substring(48, 114) }}
          <span class="font-medium purple">
            {{ $t("edu.education").substring(114, 146) }}</span
          >
          {{ $t("edu.education").substring(146, 230) }}
          <span class="font-medium purple">{{
            $t("edu.education").substring(230, 236)
          }}</span>
          {{ $t("edu.education").substring(236, 240) }}
          <span class="font-medium purple clickable">{{
            $t("edu.education").substring(240, 248)
          }}</span
          >{{ $t("edu.education").substring(248, 319) }}
          <span class="font-medium purple">{{
            $t("edu.education").substring(319, 327)
          }}</span>
          {{ $t("edu.education").substring(327, 440) }}
        </p>
        <p
          v-if="lang === 'pl'"
          v-motion-p-right
          class="md:px-20 lg:px-0 text-center lg:text-right px-4 text-md lg:text-md set-background"
        >
          {{ $t("edu.education").substring(0, 35) }}
          <span @click="redirect('uni')" class="clickable">{{
            $t("edu.education").substring(35, 57)
          }}</span>
          {{ $t("edu.education").substring(57, 104) }}
          <span class="font-medium purple">
            {{ $t("edu.education").substring(104, 164) }}</span
          >
          {{ $t("edu.education").substring(164, 245) }}
          <span class="font-medium purple">{{
            $t("edu.education").substring(245, 251)
          }}</span>
          {{ $t("edu.education").substring(251, 252) }}
          <span class="font-medium purple clickable">{{
            $t("edu.education").substring(252, 262)
          }}</span
          >{{ $t("edu.education").substring(262, 328) }}
          <span class="font-medium purple">{{
            $t("edu.education").substring(328, 338)
          }}</span>
          {{ $t("edu.education").substring(338, 440) }}
        </p>

        <h2
          v-motion-title-right
          class="title-red text-center mt-4 lg:text-right"
        >
          {{ $t("edu.workTitle") }}
        </h2>
        <p
          v-motion-p-right
          class="px-4 md:px-20 lg:px-0 text-center lg:text-right text-md lg:text-md set-background"
        >
          <span @click="redirect('sysmo')" class="clickable clickable-red"
            >Sysmo.pl</span
          >:
          <span class="font-light red"
            >{{ $t("app.december") }} 2021 - {{ $t("app.present") }}<br
          /></span>
          {{ $t("edu.work") }}
          <span @click="redirect('adrem')" class="clickable clickable-red"
            >AdREM</span
          >.
          
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Education",
  setup() {
    let lang = ref(window.localStorage.getItem("lan"));
    const redirect = (to: any) => {
      if (to === "adrem") window.open("https://adrem.energy/", "_blank");
      if (to === "sysmo") window.open("https://sysmo.pl/", "_blank");
      if (to === "uni") window.open("https://www.uni.lodz.pl/", "_blank");
      if (to === "senior") window.open("https://seniorapp.pl/", "_blank");
      if (to === "exposo") window.open("https://www.logiplanner.eu/", "_blank");
    };
    return { redirect, lang };
  },
});
</script>
<style scoped>
.container {
  background: #FFEEEE;
  background: linear-gradient(0deg,rgba(255, 238, 238, 1) 0%, rgba(255, 255, 255, 1) 100%) !important;
}
.logo:hover {
  transform: translateY(-10px);
}
.content {
  max-width: 1680px;
  margin: auto;
}
.big-image {
  max-width: 600px;
}
@media screen and (max-width: 700px) {
  .big-image {
    max-width: 90vw;
  }
}
</style>
