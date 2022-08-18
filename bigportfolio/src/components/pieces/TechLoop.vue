<template>
  <div>
    <div id="rssBlock">
      <p class="cnnContents">
        <span class="marqueeStyle"
          >&nbsp;continuous infinite text loop 1 continuous infinite text loop 2
        </span>
        <!-- duplicate above, change style to allow continous scroll -->
        <span class="marqueeStyle2"
          >&nbsp;continuous infinite text loop 3 continuous infinite text loop
          4&nbsp;</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechLoop",
};
</script>

<style scoped>
#rssBlock {
  background-color: #ffe602;
}
</style>
