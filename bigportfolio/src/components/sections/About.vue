<template>
  <div class="aboutSection">
    <div class="salmonFlex">
      <div class="centerContainer">
        <div class="textBox">
          <p>
            Since graduating from ad school, I've dedicated my time to learning
            new skills and techniques to develop a greater vision of digital
            businesses and create high-impact ideas.
          </p>
          <p>
            Whatever the challenge, I'll search in my toolbox to make it happen.
          </p>
          <button class="projBtn">Download CV</button>
        </div>

        <div class="picture">
          <img
            id="federico"
            src="@/assets/about/myPicture.png"
            alt="federico"
          />
          <img
            id="linkedin"
            src="@/assets/about/linkedin.png"
            alt="linkedin profile"
          />
          <img
            id="github"
            src="@/assets/about/github.png"
            alt="github profile"
          />
        </div>
      </div>
    </div>
    <section class="skillsContainer">
      <div class="scroll text1">
        <div>
          <span style="color: #ffe602">Front-End Dev</span> • Craftsman •
          <span style="color: #ffe602">Digital Marketing</span>• Team Player •
          <span style="color: #ffe602">Advertising</span> • Music Lover •
          <span style="color: #ffe602">Project Manager</span> • Climber •
          <span style="color: #ffe602">UX/UI</span> • Globetrotter •
        </div>
        <div>
          <span style="color: #ffe602">Front-End Dev</span> • Craftsman •
          <span style="color: #ffe602">Digital Marketing</span>• Team Player •
          <span style="color: #ffe602">Advertising</span> • Music Lover •
          <span style="color: #ffe602">Project Manager</span> • Climber •
          <span style="color: #ffe602">UX/UI</span> • Globetrotter •
        </div>
      </div>
      <div class="scroll text2">
        <div>
          <span style="color: #ffe602">Front-End Dev</span> • Craftsman •
          <span style="color: #ffe602">Digital Marketing</span>• Team Player •
          <span style="color: #ffe602">Advertising</span> • Music Lover •
          <span style="color: #ffe602">Project Manager</span> • Climber •
          <span style="color: #ffe602">UX/UI</span> • Globetrotter •
        </div>
        <div>
          <span style="color: #ffe602">Front-End Dev</span> • Craftsman •
          <span style="color: #ffe602">Digital Marketing</span>• Team Player •
          <span style="color: #ffe602">Advertising</span> • Music Lover •
          <span style="color: #ffe602">Project Manager</span> • Climber •
          <span style="color: #ffe602">UX/UI</span> • Globetrotter •
        </div>
      </div>
      <div class="scroll text3">
        <div>
          <span style="color: #ffe602">Front-End Dev</span> • Craftsman •
          <span style="color: #ffe602">Digital Marketing</span>• Team Player •
          <span style="color: #ffe602">Advertising</span> • Music Lover •
          <span style="color: #ffe602">Project Manager</span> • Climber •
          <span style="color: #ffe602">UX/UI</span> • sdfg •
        </div>
        <div>
          <span style="color: #ffe602">Front-End Dev</span> • Craftsman •
          <span style="color: #ffe602">Digital Marketing</span>• Team Player •
          <span style="color: #ffe602">Advertising</span> • Music Lover •
          <span style="color: #ffe602">Project Manager</span> • Climber •
          <span style="color: #ffe602">UX/UI</span> • sdfg •
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.salmonFlex {
  padding: 5%;
  margin: 0;
  border: 8px solid black;
  box-sizing: border-box;
  background-color: #ff7262;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  background-image: url("@/assets/about/mountains3.png");
  background-repeat: no-repeat;
  background-position: bottom;
}
.centerContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;
  /* padding: 5%; */
  gap: 5%;
  margin-top: 5%;
  margin-bottom: 40%;
}

.textBox {
  border: 4px solid black;
  background-color: white;
  border-radius: 40px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: auto;
  width: 70%;
}
p {
  font-family: "Argentum Sans";
  text-align: center;
  font-size: 18px;
}

button {
  width: 60%;
  height: 40px;
  align-self: center;
  background-color: #ffe602;
  border: 4px solid black;
  box-shadow: 0.3rem 0.3rem black;
  font-family: "Basement Grotesque";
  font-size: 18px;
  margin-top: 5%;
}

.picture {
  position: relative;
}

#linkedin {
  position: absolute;
  top: 20%;
  left: 90%;
  z-index: 20;
}

#github {
  position: absolute;
  top: 50%;
  left: 90%;
  z-index: 20;
}

section {
  padding: 5%;
  margin: 0;

  background-color: black;
  width: 100%;
  overflow: hidden;
  height: 20%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

section .scroll {
  width: 100%;
  display: flex;
}
section .scroll div {
  font-family: "Bubblegum";
  font-size: 100px;
  color: white;
  white-space: nowrap;
  animation: animateTop 60s linear infinite;
  animation-delay: -60s;
}
section .scroll div:nth-child(2) {
  animation: animateTop2 60s linear infinite;
  animation-delay: -30s;
}

@keyframes animateTop {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes animateTop2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
}

section .scroll.text2 div {
  font-family: "Bubblegum";
  font-size: 100px;
  color: white;
  white-space: nowrap;
  animation: animateMiddle 200s linear infinite;
  animation-delay: -200s;
}
section .scroll.text2 div:nth-child(2) {
  animation: animateMiddle2 200s linear infinite;
  animation-delay: -100s;
}
@keyframes animateMiddle {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes animateMiddle2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
}

section .scroll.text3 div {
  font-family: "Bubblegum";
  font-size: 100px;
  color: white;
  white-space: nowrap;
  animation: animateBottom 100s linear infinite;
  animation-delay: -100s;
}
section .scroll.text3 div:nth-child(2) {
  animation: animateBottom2 100s linear infinite;
  animation-delay: -50s;
}
@keyframes animateBottom {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes animateBottom2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
}
</style>
