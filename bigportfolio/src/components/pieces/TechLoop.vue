<template>
  <div>
    <div id="rssBlock">
      <p class="cnnContents">
        <span class="marqueeStyle"
          >&nbsp;TECK STACK • TECK STACK • TECK STACK • TECK STACK •</span
        >
        <!-- duplicate above, change style to allow continous scroll -->
        <span class="marqueeStyle2"
          >&nbsp;TECK STACK • TECK STACK • TECK STACK • TECK STACK •&nbsp;</span
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
/* #rssBlock {
  background-color: #ffe602;
  font-family: "Basement Grotesque";
}

.marqueeStyle {
  font-family: "Basement Grotesque";
}
.marqueeStyle2 {
  font-family: "Basement Grotesque";
} */
#rssBlock {
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0px;
  height: 20%;
  background: #ffe602;
  position: absolute;
  width: 100%;
  overflow: hidden;
}

/*remove p*/
.cnnContents {
  width: 100%;
  padding-top: 20px;
  margin: 0 auto;
  font-size: 30px;
  white-space: nowrap;
  text-transform: uppercase;
  font-family: "Museo";
  font-weight: 300;
}

.marqueeStyle {
  font-family: "Basement Grotesque";
  font-size: 50px;
  display: inline-block;
  /* Apply animation to this element */
  -webkit-animation: scrolling-left1 20s linear infinite;
  animation: scrolling-left1 20s linear infinite;
}

.marqueeStyle2 {
  font-family: "Basement Grotesque";
  font-size: 50px;
  display: inline-block;
  /* Apply animation to this element */
  -webkit-animation: scrolling-left2 20s linear infinite;
  animation: scrolling-left2 20s linear infinite;
  animation-delay: 10s;
}
/* scrolling-left is continuous/repeatly text */
@keyframes scrolling-left1 {
  0% {
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
}
@keyframes scrolling-left2 {
  0% {
    transform: translateX(0%);
    -webkit-transform: translateX(0%);
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
