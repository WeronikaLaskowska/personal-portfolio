<template>
  <nav class="nav transition-all duration-500 grid place-items-center fixed w-screen z-10">
    <div
      class="header transition-all bg-white duration-500 overflow-visible flex items-center content-center h-16 text-xl rounded-b-twenty opacity-80 pb-2.5 -top-20"
    >
      <div
        :class="active === 'home' ? 'active' : ''"
        class="element flex items-center content-center flex-col"
      >
        <div v-if="active === 'home'">
          <p>Home</p>
        </div>
        <div class="pic">
          <img
            @click="(active = 'home'), goto('home')"
            src="./../assets/home.png"
            alt=""
          />
        </div>
      </div>
      <div
        :class="active === 'about' ? 'active' : ''"
        class="element flex items-center content-center flex-col"
      >
        <div v-if="active === 'about'">
          <p>About</p>
        </div>
        <div class="pic">
          <img
            @click="(active = 'about'), goto('about')"
            src="./../assets/user.png"
            alt=""
          />
        </div>
      </div>
      <div
        :class="active === 'edu' ? 'active' : ''"
        class="element flex items-center content-center flex-col"
      >
        <div v-if="active === 'edu'">
          <p>Education</p>
        </div>
        <div class="pic">
          <img
            @click="(active = 'edu'), goto('edu')"
            src="./../assets/graduation-cap.png"
            alt=""
          />
        </div>
      </div>
      <div
        :class="active === 'abi' ? 'active' : ''"
        class="element flex items-center content-center flex-col"
      >
        <div v-if="active === 'abi'">
          <p>Abilities</p>
        </div>
        <div class="pic">
          <img
            @click="(active = 'abi'), goto('abi')"
            src="./../assets/idea.png"
            alt=""
          />
        </div>
      </div>
      <div
        :class="active === 'proj' ? 'active' : ''"
        class="element flex items-center content-center flex-col"
      >
        <div v-if="active === 'proj'">
          <p>Projects</p>
        </div>
        <div class="pic">
          <img
            @click="(active = 'proj'), goto('proj')"
            src="./../assets/project-management.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="background"></div>
  </nav>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    let lastScrollTop = 0;
    let active = ref("about");
    window.addEventListener("scroll", function (e) {
      let scrollTop = this.document.documentElement.scrollTop;
      let mobile = window.innerWidth < 800 ? 1.6 : 0;
      const header = document.querySelector(".nav");
      if (window.scrollY > window.screen.height - 400) {
        if (window.scrollY > (2 + mobile) * window.screen.height - 400) {
          if (window.scrollY > (3 + mobile) * window.screen.height - 400) {
            if (
              window.scrollY >
              (4 + mobile) * window.screen.height - (mobile > 0 ? 300 : 800)
            ) {
              active.value = "proj";
            } else {
              active.value = "abi";
            }
          } else {
            active.value = "edu";
          }
        } else {
          active.value = "about";
        }
      } else {
        active.value = "home";
      }
      if (scrollTop > lastScrollTop) {
        console.log(window.screen.height);
        header.style.top = "-180px";
      } else {
        header.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });
    const goto = (refName) => {
      document.getElementById(refName).scrollIntoView({
        behavior: "smooth",
      });
    };
    return { active, goto };
  },
});
</script>

<style scoped>
.nav {
  top: -180px;
}
.header {
  width: 500px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.element img {
  width: 35px;
  height: 35px;
  cursor: pointer;
  opacity: 1;
}
.element p {
  font-size: 16px;
}

.active {
  transform: translateY(0px);
}
.active .pic {
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  background: #dcd5dd;
  border-radius: 100%;
  padding: 15px;
}

@media screen and (max-width: 550px) {
  .header {
    width: 350px;
  }
  .element img {
    width: 25px;
    height: 25px;
  }
  .element p {
    font-size: 14px;
  }
  .element {
    padding: 10px;
    height: 100%;
    width: 100%;
  }
  .active .pic {
    padding: 5px;
  }
}
</style>
