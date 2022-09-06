<template>
  <div class="home">
    <Hero />
    <Epic />
    <TechStack />
    <About />
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from "@/components/sections/Hero.vue";
import Epic from "@/components/sections/Epic.vue";
import TechStack from "@/components/sections/TechStack.vue";
import About from "@/components/sections/About.vue";
// import About from "@/components/sections/About.vue";

export default {
  name: "HomeView",
  components: {
    Hero,
    Epic,
    TechStack,
    About,
  },
};
</script>
<style></style>
