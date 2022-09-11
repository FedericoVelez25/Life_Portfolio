<template>
  <div class="home">
    <Hero />
    <Epic />
    <TechStack />
    <About />
    <Hobbies />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from "@/components/sections/Hero.vue";
import Epic from "@/components/sections/Epic.vue";
import TechStack from "@/components/sections/TechStack.vue";
import About from "@/components/sections/About.vue";
import Hobbies from "@/components/sections/Hobbies.vue";
import Contact from "../components/sections/Contact.vue";

export default {
  name: "HomeView",
  components: {
    Hero,
    Epic,
    TechStack,
    About,
    Hobbies,
    Contact,
  },
};
</script>
<style></style>
