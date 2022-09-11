<template>
  <div class="hero-container">
    <div class="containerFlex">
      <img
        id="downArrow"
        src="../../assets/hero/white_arrow.png"
        alt="down arrow"
      />
      <div class="hero-content-text">
        <h2>This is my portfolio</h2>
        <g class="welcome">
          <p id="W">W</p>
          <p id="E">E</p>
          <p id="L">L</p>
          <p id="C">C</p>
          <p id="O">O</p>
          <p id="M">M</p>
          <p id="E">E</p>
        </g>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.hero-container {
  font-family: "Bubblegum";
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
  height: 85vh;
  width: auto;
  background-color: black;
}
.containerFlex {
  display: flex;
  justify-content: center;
  gap: 8%;
}

#downArrow {
  z-index: 20;
  /* display: none; */
}

.hero-content-text {
  color: white;
  font-size: 60px;
  display: flex;
  flex-direction: column;
  text-align: right;
  width: auto;
  height: 80%;
  padding-bottom: 30px;
}

.welcome {
  display: flex;
  justify-content: flex-end;
}
h2 {
  font-size: 40px;
  margin-bottom: 10px;
}

g {
  font-size: 200px;
  margin-top: 10px;
}

.container-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;
}

/*
g p {
  transform: translateY(3px);
}

g:nth-child(1) p {
  animation-name: wiggleWiggle;
  animation-duration: 1.25s;
  animation-direction: alternate;
  animation-timing-function: steps(2, end);
  animation-iteration-count: infinite;
}

#W {
  animation-delay: 0s;
}
#E {
  animation-delay: 0.1s;
}

#L {
  animation-delay: 0.15s;
}

#C {
  animation-delay: 0.2s;
}

#O {
  animation-delay: 0.25s;
}
#M {
  animation-delay: 0.3s;
}

#E {
  animation-delay: 0.35s;
}

@keyframes wiggleWiggle {
  20%,
  100% {
    transform: translate(0, 3px);
  }

  0% {
    transform: translate(0, 0px);
  }
  10% {
    transform: translate(0, 3px);
  }
} */
</style>
