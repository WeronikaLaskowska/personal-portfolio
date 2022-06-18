<template>
  <div class="bubbles relative flex">
    <span style="--i: 25"></span>
    <span style="--i: 11"></span>
    <span style="--i: 21"></span>
    <span style="--i: 12"></span>
    <span style="--i: 19"></span>
    <span style="--i: 21"></span>
    <span style="--i: 20"></span>
    <span style="--i: 12"></span>
    <span style="--i: 18"></span>
    <span style="--i: 16"></span>
    <span style="--i: 11"></span>
    <span style="--i: 19"></span>
    <span v-if="bigScreen" style="--i: 27"></span>
    <span v-if="bigScreen" style="--i: 21"></span>
    <span v-if="bigScreen" style="--i: 19"></span>
    <span v-if="bigScreen" style="--i: 11"></span>
    <span v-if="bigScreen" style="--i: 21"></span>
    <span v-if="bigScreen" style="--i: 14"></span>
    <span v-if="bigScreen" style="--i: 15"></span>
    <span v-if="bigScreen" style="--i: 21"></span>
    <span v-if="bigScreen" style="--i: 12"></span>
    <span v-if="bigScreen" style="--i: 24"></span>
    <span v-if="bigScreen" style="--i: 23"></span>
    <span v-if="bigScreen" style="--i: 17"></span>
    <span v-if="bigScreen" style="--i: 14"></span>
    <span v-if="bigScreen" style="--i: 18"></span>
    <span v-if="bigScreen" style="--i: 22"></span>
    <span v-if="bigScreen" style="--i: 11"></span>
    <span v-if="largeScreen" style="--i: 10"></span>
    <span v-if="largeScreen" style="--i: 17"></span>
    <span v-if="largeScreen" style="--i: 15"></span>
    <span v-if="largeScreen" style="--i: 11"></span>
    <span v-if="largeScreen" style="--i: 19"></span>
    <span v-if="largeScreen" style="--i: 27"></span>
    <span v-if="largeScreen" style="--i: 21"></span>
    <span v-if="largeScreen" style="--i: 19"></span>
    <span v-if="largeScreen" style="--i: 11"></span>
    <span v-if="largeScreen" style="--i: 21"></span>
    <span v-if="largeScreen" style="--i: 14"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Bubbles",
  setup(){
      const bigScreen = ref(true);
      const largeScreen = ref(true);
      if(window.innerWidth>700) bigScreen.value=true
      else bigScreen.value=false;
      if(window.innerWidth>1000) largeScreen.value=true
      else largeScreen.value=false;
      return{ bigScreen, largeScreen}
  }
});
</script>

<style scoped>
.bubbles span {
  z-index: 0;
  position: relative;
  width: 30px;
  height: 30px;
  background: #c7dbe6;
  margin: 0 4px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #4fc3dc44, 0 0 50px #c7dbe6, 0 0 100px #c7dbe6;
  animation: animate 15s linear infinite;
  animation-duration: calc(125s/var(--i));
}
.bubbles span:nth-child(even) {
  background: #ec615b;
  box-shadow: 0 0 0 10px #ff2d7544, 0 0 50px #ec615b, 0 0 100px #ec615b;
}

@keyframes animate {
  0% {
    transform: translateY(100vh) scale(0);
  }
  100% {
    transform: translateY(-10vh) scale(1);
  }
}
</style>
