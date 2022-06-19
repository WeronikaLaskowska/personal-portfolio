<template>
  <!-- <div class="container min-w-full min-h-full grid place-items-center lg:min-h-screen">
     <main-display
      :src="'src/assets/uni.png'"
      :title="'University'"
      :text="'IT studies - programming and graphic design specialty. Acquired my diploma in June, 2022. Graduated university with a great result and a scolarship.'"
      :purple="false"
    />
    <main-display
      :src="'src/assets/udemy.png'"
      :title="'Self education'"
      :text="'Persuing education on my own regurarly. I use platforms such as Udemy and Youtube. Finished multiple highly rated courses. I’m also an active user of Twitter gaining daily insight into the tech world and learning interesting clues and tips regarding programming.'"
      :purple="true"
    />
    <main-display
      :src="'src/assets/work.png'"
      :title="'Work experience'"
      :text="'I gained a lot of practical experience and valuable knowledge working as a front-end developer in Sysmo. I had a pleasure working on projects such as SeniorApp and Mazowiecki Dom Pogrzebowy.'"
      :purple="false"
    /> 
  </div> -->
  <div
      id="edu"
    class="container min-w-full min-h-full grid place-items-center lg:min-h-screen overflow-hidden max-w-screen  "
  >
    <div
      class="content py-12 flex flex-col lg:grid lg:grid-cols-2 lg:place-items-center lg:px-12 lg:py-8"
    >
      <div v-motion-title-left class="img grid place-items-center lg:place-items-start">
        <img class="big-image" src="./../assets/img3.png" alt="" />
      </div>
      <div class="text-section flex flex-col">
        <h1 v-motion-title-right class="title-purple text-center lg:text-right">
          Education
        </h1>
        <p
          v-motion-p-right
          class="md:px-20 lg:px-0 text-center lg:text-right px-4 text-lg lg:text-xl"
        >
          I had finished IT studies at <span @click="redirect('uni')" class="font-medium purple underline cursor-pointer">University of Lodz</span> and acquired my diploma in June, 2022. Graduated university with a <span class="font-medium purple">great result and a scolarship. </span>Since then I've been persuing education on my own regurarly. I use platforms such as Udemy and Youtube. Finished multiple highly rated courses. I’m also an active user of Twitter gaining daily insight into the tech world and learning interesting clues and tips regarding programming.
        </p>

        <h2 v-motion-title-right class="title-red text-center mt-4 lg:text-right">
          Work experience
        </h2>
        <p
          v-motion-p-right
          class="px-4 md:px-20 lg:px-0 text-center lg:text-right text-lg lg:text-xl"
        >
         <span @click="redirect('sysmo')" class="underline cursor-pointer">Sysmo.pl</span>: <span class="font-light red">December 2021 - present <br></span>
          I gained a lot of practical experience and valuable knowledge working as a front-end developer in Sysmo. I had a pleasure working on projects such as <span @click="redirect('senior')" class="font-medium red underline cursor-pointer">SeniorApp</span>  and <span class="font-medium red underline cursor-pointer">Mazowiecki Dom Pogrzebowy</span> .
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MainDisplay from "./MainDisplay.vue";

export default defineComponent({
  components: { MainDisplay },
  name: "Education",
  setup() {
   const redirect =(to:any)=>{
     if(to === 'sysmo') location.href ='https://sysmo.pl/'
     if(to === 'uni') location.href= 'https://www.uni.lodz.pl/'
     if(to === 'senior') location.href = 'https://seniorapp.pl/'
   }
    return { redirect };
  },
});
</script>
<style scoped>
.container {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 50%,
    rgba(211, 202, 213, 1) 92%
  ) !important;
}
.logo:hover {
  transform: translateY(-10px);
}
.content {
  max-width: 1680px;
  margin: auto;
}

/* p{
    text-align: justify;
      text-justify: inter-word;
} */
</style>
