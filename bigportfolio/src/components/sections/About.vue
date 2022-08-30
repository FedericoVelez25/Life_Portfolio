<template>
  <section class="aboutSection">
    <section class="salmonFlex">
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
    </section>
    <section class="skillsContainer">
      <div class="scroll text1">
        <div>
          Front-End Dev • Craftsman • Digital Marketing • Advertising • Team
          Player • Project Manager • Music Lover • UX/UI • Climber
        </div>
      </div>
      <div class="scroll text2">
        <div>
          Front-End Dev • Craftsman • Digital Marketing • Advertising • Team
          Player • Project Manager • Music Lover • UX/UI • Climber
        </div>
      </div>
      <div class="scroll text3">
        <div>
          Front-End Dev • Craftsman • Digital Marketing • Advertising • Team
          Player • Project Manager • Music Lover • UX/UI • Climber
        </div>
      </div>
    </section>
  </section>
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
  /* background-size: cover; */
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

.skillsContainer {
  padding: 5%;
  margin: 0;
  border: 8px solid black;
  box-sizing: border-box;
  background-color: black;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
}

section .scroll {
  font-family: "Bubblegum";
  font-size: 128px;
  color: white;
  width: 100%;
  display: flex;
}
</style>
