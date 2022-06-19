<script lang="ts">
import Navbar from "./components/Navbar.vue";

export default {
  components: {Navbar}
}
</script>

<template>
  <navbar/>
  <router-view></router-view>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Titillium+Web&display=swap");

body {
  font-family: "Montserrat", sans-serif;
}
.red {
  color: #ec615b;
}
.purple {
  color: #5222d0;
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

.box-animation{
  position:relative;
  width: 500px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
  border-radius: 20px;
}
.box-animation h1{
  color: #1d1d1d;
  font-weight: 300;
  position: relative;
  z-index: 10;
}
.box-animation::before{
  content: '';
  position: absolute;
  width: 600px;
  height: 120px;
  background: linear-gradient(90deg, rgba(236,97,91,1) 0%, rgba(82,34,208,1) 100%);
  animation: border-animation 4s linear infinite;

}
.box-animation::after{
  content: '';
  position: absolute;
  background: #fff;
  inset:4px;
  border-radius: 16px;
  z-index: 1;

}
@keyframes border-animation {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
@media screen and (max-width:600px) {

  .box-animation{
    width: 300px;
    height: 150px;
  }
  .box-animation::before{
    content: '';
    position: absolute;
    width: 400px;
    height: 120px;
    background: linear-gradient(90deg, rgba(236,97,91,1) 0%, rgba(82,34,208,1) 100%);
    animation: border-animation 4s linear infinite;

  }
}
</style>
