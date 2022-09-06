<template>
  <section id="techSection">
    <TechLoop class="techLoop" />
    <div class="containerFlex grid">
      <div class="logo col" id="html">
        <img src="@/assets/logos/html.png" />
      </div>
      <div class="logo col" id="css">
        <img src="@/assets/logos/css.png" />
      </div>
      <div class="logo col" id="js">
        <img src="@/assets/logos/js.png" />
      </div>
      <div class="logo col" id="vue">
        <img src="@/assets/logos/vue.png" />
      </div>
      <div class="logo col" id="github">
        <img src="@/assets/logos/github.png" />
      </div>
      <div class="logo col" id="git">
        <img src="@/assets/logos/git.png" />
      </div>
      <div class="logo col" id="ps">
        <img src="@/assets/logos/ps.png" />
      </div>
      <div class="logo col" id="ai">
        <img src="@/assets/logos/ai.png" />
      </div>
      <div class="logo col" id="figma">
        <img src="@/assets/logos/figma.png" />
      </div>
      <div class="logo col" id="tailwind">
        <img src="@/assets/logos/tailwind.png" />
      </div>
      <div class="logo col" id="mongo">
        <img src="@/assets/logos/mongo.png" />
      </div>
      <div class="logo col" id="node">
        <img src="@/assets/logos/node.png" />
      </div>
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

/* .contianerFlex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 200px;
  width: 100vw;
  z-index: 20;
} */

.logo {
  display: flex;
  justify-content: center;
  align-content: center;
}

.grid {
  /* display: block; */
  padding: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  @media (min-width: 768px) {
    display: grid;
    grid-gap: 16px;
  }
}

.col {
  margin-block: 16px;
  padding: 16px;
}

#vue {
  padding: 10%;
}
</style>
