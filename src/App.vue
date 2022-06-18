<script setup lang="ts"></script>

<template>
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
</style>
