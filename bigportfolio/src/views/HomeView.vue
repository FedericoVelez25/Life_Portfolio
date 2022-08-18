<template>
  <div class="home">
    <Hero />
    <Epic />
    <TechStack />
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from "@/components/sections/Hero.vue";
import Epic from "@/components/sections/Epic.vue";
import TechStack from "@/components/sections/TechStack.vue";

export default {
  name: "HomeView",
  components: {
    Hero,
    Epic,
    TechStack,
  },
};
</script>
<style>
#climb {
  display: flex;
  padding: 0;
  flex-direction: column;

  /* height: 100%;
  width: auto; */
}
</style>
