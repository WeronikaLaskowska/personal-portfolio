<template>
  <nav
    class="nav transition-all duration-500 grid place-items-center fixed w-screen z-10"
  >
    <div
      class="header transition-all bg-white duration-500 overflow-visible flex items-center content-center h-16 text-xl rounded-b-twenty pb-2.5 -top-20"
    >
      <div class="language-switch pl-2 pt-2">
        <span :class="lang === 'pl' ? 'red font-bold text-sm md:text-2xl' : 'text-sm md:text-2xl'" @click="changeLang('pl')"
          >PL</span
        >/<span :class="lang === 'en' ? 'red font-bold text-sm md:text-2xl' : 'text-sm md:text-2xl'" @click="changeLang('en')"
          >EN</span
        >
      </div>
      <div
        :class="active === 'home' ? 'active' : ''"
        class="element flex items-center content-center flex-col"
      >
        <div v-if="active === 'home'">
          <p>Home</p>
        </div>

        <div @click="(active = 'home'), goto('home')" class="pic">
          <img
            v-if="active === 'home'"
            class="evenout"
            src="./../assets/home-white.png"
            alt=""
          />
          <img v-else src="./../assets/home.png" class="w-[25px] max-w-[25px] min-w-[25px]" alt="" />
        </div>
      </div>
      <div
        :class="active === 'about' ? 'active' : ''"
        class="element flex items-center content-center flex-col"
      >
        <div v-if="active === 'about'">
          <p>About</p>
        </div>
        <div @click="(active = 'about'), goto('about')" class="pic">
          <img
            v-if="active === 'about'"
            class="evenout"
            src="./../assets/user-white.png"
            alt=""
          />
          <img v-else src="./../assets/user.png" alt="" />
        </div>
      </div>
      <div
        :class="active === 'edu' ? 'active' : ''"
        class="element flex items-center content-center flex-col"
      >
        <div v-if="active === 'edu'">
          <p>Education</p>
        </div>
        <div @click="(active = 'edu'), goto('edu')" class="pic">
          <img
            v-if="active === 'edu'"
            class="evenout"
            src="./../assets/student-white.png"
            alt=""
          />
          <img v-else src="./../assets/student.png" alt="" />
        </div>
      </div>
      <div
        :class="active === 'abi' ? 'active' : ''"
        class="element flex items-center content-center flex-col"
      >
        <div v-if="active === 'abi'">
          <p>Abilities</p>
        </div>
        <div @click="(active = 'abi'), goto('abi')" class="pic">
          <img
            v-if="active === 'abi'"
            class="evenout"
            src="./../assets/idea-kopia.png"
            alt=""
          />
          <img v-else src="./../assets/idea.png" alt="" />
        </div>
      </div>
      <div
        :class="active === 'proj' ? 'active' : ''"
        class="element flex items-center content-center flex-col"
      >
        <div v-if="active === 'proj'">
          <p>Projects</p>
        </div>
        <div @click="(active = 'proj'), goto('proj')" class="pic">
          <img
            v-if="active === 'proj'"
            class="evenout"
            src="./../assets/project-management-kopia.png"
            alt=""
          />
          <img v-else src="./../assets/project-management.png" alt="" />
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
    let lang = ref(window.localStorage.getItem("lan"));
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
      // if(refName === "home"){
      //   document.scrollIntoView(0)
      //   return;
      // }
      document.getElementById(refName).scrollIntoView({
        behavior: "smooth",
      });
    };
    const changeLang = (lan) => {
      window.localStorage.setItem("lan", lan);
      window.location.reload()
    };
    return { active, goto, changeLang, lang };
  },
});
</script>

<style scoped>
.nav {
  top: -180px;
  z-index: 99999;
}
.header {
  width: 600px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.element img {
  width: 35px;
  height: 35px;
  cursor: pointer;
  opacity: 1;
  transition: 0.3s all;
}
.element img:hover {
  transform: translateY(-5px);
}
.element p {
  font-size: 16px;
}
.evenout {
  padding: 2px 0;
}
.active {
  transform: translateY(0px);
}
.active .pic {
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  background: #ec615b;
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
.language-switch {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgb(221, 219, 219);
  padding-right: 10px;
  margin-top: 4px;
  padding-left: 10px;
}
.language-switch span {
  cursor: pointer;
  padding: 0 5px;
  transition: .6s all;
}
</style>
