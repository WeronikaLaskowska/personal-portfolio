<template>
  <section class="footer">
    <ul>
      <li>
        <a> ASDASD </a>
      </li>
      <li>
        <a href="/coffins"> />1sdWD</a>
      </li>
      <li>
        <a href="/urns"> </a>
      </li>
      <li>
        <a href="/flowers"> ASDASD /></a>
      </li>
      <li>
        <a href="/cars"> ASDA /></a>
      </li>
      <li>
        <a href="/faq"> ASDADS</a>
      </li>
      <li>
        <a href="/contact"> ASDADS</a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
});
</script>
<style scoped>
.footer {
  padding: 2.5rem;
  background: #1d1d1d;
}

.footer ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer ul li {
  padding: 0 2.5rem;
}

.footer ul li a {
  color: #fff;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .footer ul li {
    padding: 0 1.5rem;
  }

  .footer ul li a {
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem;
  }

  .footer ul {
    display: flex;
    flex-wrap: wrap;
  }

  .footer ul li {
    padding: 0 1rem;
  }

  .footer ul li a {
    font-size: 0.85rem;
  }
}

@media (max-width: 425px) {
  .footer {
    padding: 1.5rem 1rem;
  }

  .footer ul li {
    padding: 0 0.5rem;
  }

  .footer ul li a {
    font-size: 0.8rem;
  }
}
</style>
