<template>
  <div class="card">
    <div @click="redirect" class="imgBx">
      <img :src="imgURL" alt="" />
    </div>
    <div class="text-content">
      <h1>{{ title }}</h1>
      <p>
        {{ stack }}
      </p>
    </div>
    <div class="text-unwrapped">
      <p @click="redirect" class="underline font-bold cursor-pointer purple">
        WATCH
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
      location.href = props.link;
    };
    const imgURL = computed(() => {
      if (props.name === "plan") return "./../src/assets/proj1.png";
      if (props.name === "ramen") return "./../src/assets/proj3.png";
      if (props.name === "water") return "./../src/assets/proj2.png";
      if (props.name === "portfolio") return "./../src/assets/proj4.png";
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
  position: relative;
  width: 350px;
  height: 190px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
  transition: all 0.5s;
  margin-bottom: 100px;
}
.card:hover {
  height: 450px;
}
.imgBx {
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: -50px;
  transform: translateX(-50%);
  width: 200px;
  height: 150px;
  background: #fff;
  border-radius: 20px;
  transition: 0.5s;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
}
.imgBx img {
  position: absolute;
  border-radius: 20px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card:hover .imgBx {
  width: 250px;
  height: 250px;
}
.text-content {
  position: absolute;
  bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.text-content h1 {
  font-size: 20px;
  font-weight: 500;
  color: #ec615b;
}
.text-content p {
  font-size: 13px;
}
.card:hover .text-content {
  top: 50%;
}
.card:hover .text-unwrapped {
  display: block;
}

.text-unwrapped {
  position: absolute;
  top: 63%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  padding: 2px 10px;
  font-size: 14px;
  display: none;
}
</style>
