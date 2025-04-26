<template>
  <div 
    class="project-card relative overflow-hidden rounded-2xl transition-all duration-700 ease-out"
    :class="{'expanded': isExpanded || isMobile}"
    @mouseenter="handleMouseEnter" 
    @mouseleave="handleMouseLeave"
  >
    <!-- Card Background with Animated Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-white to-pink-50 dark:from-slate-900 dark:to-slate-800 transition-all duration-700">
      <div class="absolute inset-0 bg-[#ffdedd]/20 animate-gradient-shift"></div>
    </div>
    
    <!-- Decorative Shapes -->
    <div class="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#ffdedd]/30 blur-2xl transform transition-all duration-1000"
         :class="{'scale-150': isExpanded || isMobile}"></div>
    <div class="absolute -bottom-16 -left-8 w-32 h-32 rounded-full bg-pink-200/40 blur-2xl transform transition-all duration-1000 delay-100"
         :class="{'scale-125': isExpanded || isMobile}"></div>
    <div class="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-white/50 blur-xl transform transition-all duration-1000 animate-float"></div>
    
    <!-- Content Container -->
    <div class="relative z-10 flex flex-col h-full p-1">
      <!-- Image with Hover Effects -->
      <div class="image-container relative w-full overflow-hidden rounded-xl transition-all duration-700 ease-out"
           :class="{'h-40': isExpanded || isMobile, 'h-60': !isExpanded && !isMobile}">
        <!-- Image -->
        <img 
          :src="imgURL" 
          alt="" 
          class="absolute w-full h-full object-cover transition-all duration-700"
          :class="{'scale-110 filter brightness-90': isExpanded || isMobile}"
        />
        
        <!-- Animated Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#ffdedd]/90 via-[#ffdedd]/30 to-transparent opacity-0 transition-opacity duration-500"
             :class="{'opacity-100': isExpanded || isMobile}"></div>
             
        <!-- Project Title (Visible only when not expanded) -->
        <div class="absolute inset-0 flex items-center justify-center transition-all duration-500"
             :class="{'opacity-0': isExpanded || isMobile, 'opacity-100': !isExpanded && !isMobile}">
          <div class="px-6 py-4 rounded-xl bg-white/30 backdrop-blur-md shadow-lg">
            <h2 class="text-2xl font-bold text-center text-slate-800 dark:text-white">{{ title }}</h2>
          </div>
        </div>
             
        <!-- Tech Stack Pills (Appear on hover or mobile) -->
        <div class="tech-stack absolute bottom-4 left-0 w-full flex flex-wrap justify-center gap-2 px-4 transform transition-all duration-500 delay-200"
             :class="{'opacity-100 translate-y-0': isExpanded || isMobile, 'opacity-0 translate-y-8': !isExpanded && !isMobile}">
          <span v-for="(tech, index) in stackArray" :key="index"
                class="tech-pill rounded-full px-3 py-1 text-xs font-medium text-slate-800 backdrop-blur-sm transition-all duration-300"
                :style="{ animationDelay: index * 0.1 + 's' }">
            {{ tech }}
          </span>
        </div>
      </div>
      
      <!-- Details Section (Expands on hover or always on mobile) -->
      <div class="content relative px-6 py-5 transition-all duration-500 ease-out overflow-hidden"
           :class="{'opacity-100 max-h-64': isExpanded || isMobile, 'opacity-0 max-h-0 py-0': !isExpanded && !isMobile}">
        <!-- Project Title (Inside expanded content) -->
        <h2 class="text-lg font-bold text-slate-800 dark:text-white mb-3">{{ title }}</h2>
        
        <!-- Description -->
        <p class="text-sm text-slate-600 dark:text-slate-300 mb-4">{{ long }}</p>
        
        <!-- Action Button -->
        <button @click="redirect" 
                class="action-button group flex items-center gap-2 rounded-full bg-[#ffdedd] px-5 py-2.5 text-sm font-medium text-slate-800 transition-all duration-300 hover:shadow-lg hover:shadow-pink-200/50">
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Interactive Corner Element -->
    <div class="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-[#ffdedd] transition-all duration-500 ease-bounce"
         :class="{'scale-0': !isExpanded && !isMobile, 'scale-100': isExpanded || isMobile}"></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "ProjectCard",
  props: {
    src: String,
    title: String,
    link: String,
    long: String,
    stack: String,
    name: String
  },
  setup(props) {
    const isExpanded = ref(false);
    const isMobile = ref(false);
    
    const checkIfMobile = () => {
      isMobile.value = window.innerWidth <= 768; // Typowa szerokość dla urządzeń mobilnych
    };
    
    onMounted(() => {
      checkIfMobile();
      window.addEventListener('resize', checkIfMobile);
    });
    
    onUnmounted(() => {
      window.removeEventListener('resize', checkIfMobile);
    });
    
    const handleMouseEnter = () => {
      if (!isMobile.value) {
        isExpanded.value = true;
      }
    };
    
    const handleMouseLeave = () => {
      if (!isMobile.value) {
        isExpanded.value = false;
      }
    };
    
    const redirect = (event: Event) => {
      event.stopPropagation();
      window.open(props.link, "_blank");
    };

    const imgURL = computed(() => {
      if (props.name === "plan") return "./plan.png";
      if (props.name === "ramen") return "./ramen.png";
      if (props.name === "water") return "./water.png";
      if (props.name === "portfolio") return "./port.png";
      if (props.name === "game") return "./game.png";
      if (props.name === "tictac") return "./tictac.png";
      if (props.name === "seniorapp") return "./seniorapp.png";
      if (props.name === "adrem") return "./adrem1.png";
      return "";
    });
    
    const stackArray = computed(() => {
      return props.stack?.split(',').map(item => item.trim()) || [];
    });

    return {
      isExpanded,
      isMobile,
      handleMouseEnter,
      handleMouseLeave,
      redirect,
      imgURL,
      stackArray
    };
  },
});
</script>

<style scoped>
.project-card {
  width: 100%;
  max-width: 360px;
  height: auto;
  min-height: 340px;
  will-change: transform;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.project-card.expanded,
.project-card:hover {
  box-shadow: 0 20px 40px rgba(255, 222, 221, 0.3);
  transform: translateY(-10px);
}

/* Tylko na desktopach transformacja przy hover */
@media (min-width: 769px) {
  .project-card:hover {
    transform: translateY(-10px);
  }
}

/* Na mobilnych urządzeniach zawsze lekko podniesiony */
@media (max-width: 768px) {
  .project-card {
    transform: translateY(-5px);
  }
}

.tech-pill {
  background-color: rgba(255, 255, 255, 0.8);
  animation: pulse 2s infinite;
  box-shadow: 0 2px 10px rgba(255, 222, 221, 0.3);
}

.action-button:hover {
  background-color: rgba(255, 222, 221, 0.8);
  transform: translateY(-2px);
}

.ease-bounce {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-gradient-shift {
  background: linear-gradient(45deg, rgba(255, 222, 221, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 222, 221, 0.3) 100%);
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}

/* Responsive adjustments */
@media screen and (max-width: 640px) {
  .project-card {
    max-width: 100%;
  }
}

/* Animation for tech stack pills */
.tech-pill {
  animation: fadeSlideIn 0.5s forwards;
  opacity: 0;
  transform: translateY(10px);
}

@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>