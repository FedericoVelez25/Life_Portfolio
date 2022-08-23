<template>
  <div id="containerFlex">
    <p class="cnnContents">
      <span class="loop1"
        >&nbsp;TECH STACK • TECH STACK • TECH STACK • TECH STACK •</span
      >
      <!-- duplicate above, change style to allow continous scroll -->
      <span class="loop2"
        >&nbsp;TECH STACK • TECH STACK • TECH STACK • TECH STACK •&nbsp;</span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "TechLoop",
};
</script>

<style scoped>
#containerFlex {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  background: #ffe602;
  width: 100%;
  overflow: hidden;
  border: 8px solid black;
}

/*remove p*/
.cnnContents {
  width: 100%;
  margin: 0 auto;
  font-size: 30px;
  white-space: nowrap;
}

.loop1 {
  font-family: "Basement Grotesque";
  font-size: 80px;
  display: inline-block;
  /* Apply animation to this element */
  -webkit-animation: scrolling-left1 20s linear infinite;
  animation: scrolling-left1 20s linear infinite;
}

.loop2 {
  font-family: "Basement Grotesque";
  font-size: 80px;
  display: inline-block;
  /* Apply animation to this element */
  -webkit-animation: scrolling-left2 20s linear infinite;
  animation: scrolling-left2 20s linear infinite;
  animation-delay: 10s;
}
/* scrolling-left is continuous/repeatly text */
@keyframes scrolling-left1 {
  0% {
    transform: translateX(0%);
    -webkit-transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
}
@keyframes scrolling-left2 {
  0% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
  100% {
    transform: translateX(-200%);
    -webkit-transform: translateX(-200%);
  }
}

@-webkit-keyframes scrolling-left1 {
  0% {
    -webkit-transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
  }
}
@-webkit-keyframes scrolling-left2 {
  0% {
    -webkit-transform: translateX(0%);
  }
  100% {
    -webkit-transform: translateX(-200%);
  }
}
</style>
