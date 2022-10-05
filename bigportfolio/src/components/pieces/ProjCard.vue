<template>
  <div class="containerFlex">
    <div :class="isEven ? 'blackCard' : 'yellowCard'">
      <div :class="isEven ? 'textSideBlack' : 'textSideYellow'">
        <div class="underlineText">
          <h2>{{ title }}</h2>
          <div class="underline"></div>
        </div>
        <p>
          {{ description }}
        </p>
        <button class="projBtn" @click="openLink">Open Project</button>
      </div>
      <div :class="isEven ? 'imgSideBlack' : 'imgSideYellow'">
        <img
          :class="isEven ? 'imgBlack' : 'imgYellow'"
          :src="require('@/assets/projects/' + img + '')"
          alt="climbapp"
        />
      </div>
    </div>
    <!-- <div v-else class="blackCard">
      <div class="imgSideBlack">
        <img :src="require('@/assets/projects/' + img + '')" alt="climbapp" />
      </div>
      <div class="textSideBlack">
        <h2>{{ title }}</h2>
        <p>
          {{ description }}
        </p>
        <button class="projBtn" @click="openLink">Open Project</button>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "ProjCard",
  data() {
    return {
      isEven: false,
      imgSrc: "../src/assets/projects",
    };
  },
  props: {
    id: Number,
    title: String,
    description: String,
    img: String,
    link: String,
  },
  methods: {
    openLink() {
      window.open(this.link, "_blank");
    },
  },
  mounted() {
    if (this.id % 2 === 0) {
      this.isEven = true;
    }
    this.imgSrc += this.img;
  },
};
</script>

<style scoped>
.containerFlex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 15px;
}

.yellowCard {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  border-radius: 40px;
  border: 8px solid black;
}

.textSideYellow {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 50%;
  margin: 0;
  padding-left: 0;
  height: auto;
  background-color: #ffffff;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;

  gap: 10%;
}

h2 {
  font-family: "Basement Grotesque";
  font-size: 64px;
  padding-left: 2.5%;
  padding-right: 2.5%;
  z-index: 20;
}

.underlineText {
  display: flex;
  flex-direction: column;
  align-self: center;
  position: relative;
  width: 100%;
}

.underline {
  width: 65%;
  height: 40px;
  background-color: #ffe602;
  align-self: center;
  position: absolute;
  top: 50px;
  z-index: 2;
}

p {
  font-family: "Argentum Sans";
  font-size: 18px;
  padding-left: 10%;
  padding-right: 10%;
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
}

.imgSideYellow {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 50%;
  height: auto;
  background-color: #ffe602;
  padding: 0;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}

.imgYellow {
  width: auto;
  height: 70%;
  align-self: center;
  border: 6px solid black;
  border-radius: 40px;
}

.imgBlack {
  width: auto;
  height: 70%;
  align-self: center;
  border: 6px solid black;
  border-radius: 40px;
}

.blackCard {
  display: flex;
  flex-direction: row-reverse;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  border-radius: 40px;
  border: 8px solid black;
}

.textSideBlack {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 50%;
  margin: 0;
  padding: 0;
  height: auto;
  background-color: #ffffff;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  gap: 10%;
}

.imgSideBlack {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 50%;
  height: auto;
  background-color: black;
  padding: 0;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
</style>
