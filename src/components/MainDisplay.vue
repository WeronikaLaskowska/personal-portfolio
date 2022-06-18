<template>
  <div
    :class="!purple ? 'lg:flex-row-reverse' : ''"
    class="py-12 md:px-12 flex flex-col-reverse text-center items-center content-center lg:text-left lg:flex-row"
  >
    <div :class="purple ? 'px-12 md:px-0' : ''" class="img">
      <img v-if="purple" v-motion-title-left :src="src" alt=""  />
      <img v-else v-motion-title-right :src="src" alt="" />
    </div>
    <div v-if="!purple" class="text-part">
      <h1 class="title-red font-medium mb-6">{{ title }}</h1>
      <p class="text-lg px-4 lg:px-0">
        {{ text.substring(0, 67) }}
        <span class="font-bold red"> {{ text.substring(67, 74) }}</span>
        {{ text.substring(74, 118)
        }}<span class="font-bold red"> {{ text.substring(118, 130) }}</span>
        {{ text.substring(130, 137) }}
        <span class="font-bold red"> {{ text.substring(137, 180) }}</span>
      </p>
    </div>
    <div v-else class="text-part lg:ml-12">
      <h1 class="title-purple-edu font-medium mb-6">{{ title }}</h1>
      <p class="text-lg px-4 lg:px-0">
        {{ text.substring(0, 64) }}
        <span class="font-bold purple"> {{ text.substring(64, 70) }}</span>
        {{ text.substring(70, 74)
        }}<span class="font-bold purple"> {{ text.substring(74, 81) }}</span>
        {{ text.substring(81, 150) }}
        <span class="font-bold purple"> {{ text.substring(150, 158) }}</span>
        {{ text.substring(158, 200) }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainDisplay",
  props: ["src", "title", "text", "purple"],
});
</script>
<style scoped>
.red {
  color: #ec615b;
}
.purple {
  color: #5222d0;
}
p{
    max-width: 500px;
}


</style>
