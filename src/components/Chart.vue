<template>
  <div class="box overflow-hidden m-auto relative block">
    <div v-motion-small-graph1 class="boxie one"></div>
    <div v-motion-small-graph2 class="boxie two"></div>
    <div v-motion-small-graph3 class="boxie three"></div>
    <div v-motion-small-graph1 class="boxie four"></div>
    <div v-motion-small-graph4 class="boxie five pos"></div>
    <div v-motion-medium-graph class="boxie six pos"></div>
    <div v-motion-large-graph1 class="boxie seven pos"></div>
    <div v-motion-large-graph2 class="boxie eight pos"></div>
    <div v-motion-large-graph3 class="boxie nine pos"></div>
    <div v-motion-large-graph4 class="boxie ten pos"></div>
    <div v-motion-large-graph5 class="boxie elev pos"></div>
    <div v-motion-max-graph class="boxie twel pos"></div>
    <div v-motion-max-graph class="boxie fou pos"></div>
    <div v-motion-max-graph class="boxie fiv pos"></div>
    <div v-motion-max-graph class="boxie sixt pos"></div>
  </div>
  <div class="box2 flex relative m-auto">
    <img src="./../assets/image17.png" alt="" />
    <img src="./../assets/image22.png" alt="" />
    <img src="./../assets/image23.png" alt="" />
    <img src="./../assets/image25.png" alt="" />
    <img src="./../assets/image24.png" alt="" />
    <img src="./../assets/image18.png" alt="" />
    <img src="./../assets/image7.png" alt="" />
    <img src="./../assets/image20.png" alt="" />
    <img src="./../assets/image8.png" alt="" />
    <img src="./../assets/image5.png" alt="" />
    <img src="./../assets/image9.png" alt="" />
    <img src="./../assets/image19.png" alt="" />
    <img src="./../assets/image4.png" alt="" />
    <img src="./../assets/image3.png" alt="" />
    <img src="./../assets/image6.png" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Chart",
  setup() {},
});
</script>
<style scoped>
.box {
  margin-top: 4%;
  width: 800px;
  height: 400px;
  background: none;
}

.box2 {
  left: 36px;
  width: 800px;
  height: 100px;
  background: none;
  border-top: 1px solid black;
}
.box2 img {
  margin-top: 5px;
  width: 40px;
  height: 40px;
  margin-right: 8.3px;
  object-fit: contain;
}
@media screen and (max-width: 800px) {
  .box {
    margin-top: 20%;
    transform: rotate(90deg);
  }
  .box2 {
    flex-direction: column;
    border-top: none;
    top: -565px;
    left: 120px;
  }
  .box2 img {
    margin-right: 0;
    margin-bottom: 8.3px;
    object-fit: cover;
    margin-top: 0;
  }
}
@media screen and (max-width: 600px) {
  .box2 {
    left: 10px;
  }
  .box {
    left: -140px;
  }
}

.two {
  left: 11%;
}
.three {
  left: 17%;
}
.four {
  left: 23%;
}
.five {
  left: 29%;
}
.six {
  left: 35%;
}
.seven {
  left: 41%;
}
.eight {
  left: 47%;
}
.nine {
  left: 53%;
}
.ten {
  left: 59%;
}
.elev {
  left: 65%;
}
.twel {
  left: 71%;
}
.fou {
  left: 77%;
}
.fiv {
  left: 83%;
}
.sixt {
  left: 89%;
}
</style>
