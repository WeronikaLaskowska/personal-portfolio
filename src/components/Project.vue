<template>
  <div
    class="card mb-24 h-48 w-80 sm:w-96 relative bg-white rounded-twenty transition-all duration-500"
  >
    <div
      @click="redirect"
      class="imgBx absolute cursor-pointer bg-white h-36 w-52 inset-x-2/4 -top-11 transition-all duration-500 -translate-x-2/4 rounded-twenty"
    >
      <img
        class="absolute top-0 left-0 w-full h-full object-cover rounded-twenty"
        :src="imgURL"
        alt=""
      />
    </div>
    <div
      class="text-content absolute my-auto left-0 right-0 text-center bottom-5"
    >
      <h1 class="text-xl font-medium">{{ title }}</h1>
      <p class="text-sm">
        {{ stack }}
      </p>
    </div>
    <div
      class="text-unwrapped absolute my-auto left-0 right-0 text-center hidden text-sm"
    >
      <p @click="redirect" class="underline font-bold cursor-pointer red">
        {{ $t("projects.watch") }}
      </p>
      {{ long }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  name: "Project",
  props: ["src", "title", "link", "long", "stack", "name"],
  setup(props) {
    const redirect = () => {
      window.open(props.link, "_blank");
    };
    const imgURL = computed(() => {
      if (props.name === "plan") return "./plan.png";
      if (props.name === "ramen") return "./ramen.png";
      if (props.name === "water") return "./water.png";
      if (props.name === "portfolio") return "./port.png";
      if (props.name === "game") return "./game.png";
      if (props.name === "tictac") return "./tictac.png";
    });
    const imgUrl = () => {
      return new URL(`../assets/${props.src}`).href;
    };

    return { redirect, imgUrl, imgURL };
  },
});
</script>
<style scoped>
.card {
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
}
.card:hover {
  height: 450px;
}
.imgBx {
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
}
.card:hover .imgBx {
  width: 250px;
  height: 250px;
}

.card:hover .text-content {
  top: 50%;
}
.card:hover .text-unwrapped {
  display: block;
}
.text-unwrapped {
  top: 63%;
  padding: 2px 10px;
}
@media screen and (max-width: 650px) {
  .card:hover {
    height: 580px;
  }
}
</style>
