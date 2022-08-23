<template>
  <section id="techSection">
    <TechLoop class="indexLoop" />
    <div class="containerFlex">
      <div class="logo" id="html"><img src="@/assets/logos/html.png" /></div>
      <div class="logo" id="css"><img src="@/assets/logos/css.png" /></div>
      <div class="logo" id="js"><img src="@/assets/logos/js.png" /></div>
      <div class="logo" id="vue"><img src="@/assets/logos/vue.png" /></div>
      <div class="logo" id="github">
        <img src="@/assets/logos/github.png" />
      </div>
      <div class="logo" id="git"><img src="@/assets/logos/git.png" /></div>
      <div class="logo" id="ps"><img src="@/assets/logos/ps.png" /></div>
      <div class="logo" id="ai"><img src="@/assets/logos/ai.png" /></div>
      <div class="logo" id="figma"><img src="@/assets/logos/figma.png" /></div>
      <div class="logo" id="jira"><img src="@/assets/logos/jira.png" /></div>
      <div class="logo" id="mongo"><img src="@/assets/logos/mongo.png" /></div>
      <div class="logo" id="node"><img src="@/assets/logos/node.png" /></div>
    </div>
  </section>
</template>

<script>
import TechLoop from "@/components/pieces/TechLoop.vue";

export default {
  components: {
    TechLoop,
  },
};
</script>

<style scoped>
#techSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 0;
  padding: 0;
  width: auto;
}

.contianerFlex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 200px;
  width: 100vw;
  z-index: 20;
}

.logo {
  display: flex;

  justify-content: center;
  align-content: center;
  width: 16.6%;
  height: auto;
}
</style>
