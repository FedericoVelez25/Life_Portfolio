<template>
  <Navbar class="sticky" />
  <router-view />
</template>

<script>
import Navbar from "@/components/pieces/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.sticky {
  position: sticky;
  top: 0;
  z-index: 500;
}
</style>
