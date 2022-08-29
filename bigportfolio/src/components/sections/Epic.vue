<template>
  <section id="epicSection">
    <BigWall class="bigWall" />
    <EpicContent />
  </section>
</template>

<script>
import BigWall from "../pieces/BigWall.vue";
import EpicContent from "../pieces/EpicContent.vue";
export default {
  name: "Epic",
  components: { BigWall, EpicContent },
};
</script>

<style>
#epicSection {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0;
  padding: 0;
  height: 100%;
  width: auto;
}
</style>
