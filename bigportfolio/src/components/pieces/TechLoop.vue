<template>
  <section id="containerFlex">
    <div class="scroll text1">
      <div>TECH STACK • TECH STACK • TECH STACK • TECH STACK •</div>
      <div>TECH STACK • TECH STACK • TECH STACK • TECH STACK •</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TechLoop",
};
</script>

<style scoped>
section {
  width: 100%;
  overflow: hidden;
  height: 20%;
}
#containerFlex {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffe602;
  border: 8px solid black;
}

section .scroll {
  width: 100%;
  display: flex;
}
section .scroll div {
  font-family: "Basement Grotesque";
  font-size: 80px;
  white-space: nowrap;
  animation: animate 40s linear infinite;
  animation-delay: -40s;
}
section .scroll div:nth-child(2) {
  animation: animate2 40s linear infinite;
  animation-delay: -20s;
}
@keyframes animate {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes animate2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
}
</style>
