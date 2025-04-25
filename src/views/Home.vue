<template>
  <landing />
  <about />
  <education />
  <abilities />
  <projects />
  <contact />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Bubbles from "../components/Bubbles.vue";
import About from "../components/About.vue";
import Education from "../components/Education.vue";
import Chart from "../components/Chart.vue";
import Abilities from "../components/Abilities.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
import LeftSide from "../components/LeftSide.vue";
import Landing from "../components/Landing.vue";
export default defineComponent({
  name: "Home",
  components: {
    Bubbles,
    About,
    Education,
    Chart,
    Abilities,
    Projects,
    Contact,
    LeftSide,
    Landing
  },
});
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  background: linear-gradient(
    180deg,
    rgba(7, 17, 8, 0.5396752450980392) 0%,
    rgba(7, 17, 8, 1) 80%
  );
}

.title {
  font-size: 128px;
  color: #fff;
}
.pic {
  padding-bottom: 100px;
}
.content p {
  font-size: 32px;
  color: #c7dbe6;
}
.profile-pic {
  border: 35px solid rgbA(199, 219, 230, 0.4);
  transition: 0.5s;
}
.profile-pic:hover {
  border: 0px solid rgbA(199, 219, 230, 0.4);
}
.bubblez {
  min-height: 800px;
}
.content {
  width: 100%;
  max-width: 1680px;
  margin: auto;
}
img {
  max-width: 500px;
  border: 15px solid #c7dbe6;
}
/* .text {
  padding-left: 100px;
} */

@media screen and (max-width: 1100px) {
  img {
    max-width: 400px;
  }
  /* .title {
    font-size: 84px;
    color: #fff;
  }

  .content p {
    font-size: 24px;
    color: #c7dbe6;
    padding: 30px 0px;
    max-width: 80vw;
  }
  .text {
    padding-left: 0px;
  } */
}

@media screen and (max-width: 600px) {
  img {
    max-width: 300px;
  }
  .title {
    font-size: 64px;
    color: #fff;
  }

  .content p {
    font-size: 20px;
    color: #c7dbe6;
    padding-bottom: 100px;
    max-width: 80vw;
  }
  /* .content {
    margin-left: -30px;
  } */
}
@media screen and (max-width: 450px) {
  img {
    max-width: 300px;
  }
  .title {
    font-size: 54px;
    color: #fff;
  }

  .content p {
    font-size: 18px;
    color: #c7dbe6;
  }
  .pic {
    margin-left: -40px;
    margin-top: -50px;
  }
}
</style>
