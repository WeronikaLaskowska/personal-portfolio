<script lang="ts">
import { onMounted } from "@vue/runtime-core";
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
  setup() {
    onMounted(() => {
      if (!window.localStorage.getItem("lan")) {
        window.localStorage.setItem("lan", "pl");
        window.location.reload()
      }
    });
  },
};
</script>

<template>
  <navbar />
  <div class="cursor"></div>
  <router-view></router-view>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Titillium+Web&display=swap");

body {
  font-family: "Montserrat", sans-serif;
}
.red {
  color: #ec615b !important;
}
.purple {
  color: #5222d0 !important;
}
.title-red {
  color: #ec615b;
  font-size: 64px;
}
.title-purple {
  color: #5222d0;
  font-size: 92px;
}
.title-purple-edu {
  color: #5222d0;
  font-size: 64px;
}
@media screen and (max-width: 1100px) {
  .title-red {
    font-size: 45px;
  }
  .title-purple {
    font-size: 65px;
  }
  .title-purple-edu {
    font-size: 45px;
  }
}

.box-animation {
  position: relative;
  width: 500px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
}
.box-animation h1 {
  color: #1d1d1d;
  font-weight: 300;
  position: relative;
  z-index: 10;
}
.box-animation::before {
  content: "";
  position: absolute;
  width: 600px;
  height: 120px;
  background: linear-gradient(
    90deg,
    rgba(236, 97, 91, 1) 0%,
    rgba(82, 34, 208, 1) 100%
  );
  animation: border-animation 4s linear infinite;
}
.box-animation::after {
  content: "";
  position: absolute;
  background: #fff;
  inset: 4px;
  border-radius: 16px;
  z-index: 1;
}

@keyframes border-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media screen and (max-width: 600px) {
  .box-animation {
    width: 300px;
    height: 150px;
  }
  .box-animation::before {
    content: "";
    position: absolute;
    width: 400px;
    height: 120px;
    background: linear-gradient(
      90deg,
      rgba(236, 97, 91, 1) 0%,
      rgba(82, 34, 208, 1) 100%
    );
    animation: border-animation 4s linear infinite;
  }
}
.float {
  animation: float 6s ease-in-out infinite;
}
.glass {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}

.set-background {
  background: #fff;
  padding: 25px 20px !important;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
}
</style>
