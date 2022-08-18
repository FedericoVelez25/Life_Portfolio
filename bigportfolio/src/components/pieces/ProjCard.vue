<template>
  <div class="containerFlex">
    <div class="yellowCard">
      <div class="textSideYellow">
        <h2>{{ title }}</h2>
        <p>
          {{ description }}
        </p>
        <button class="projBtn" @click="openLink">Open Project</button>
      </div>
      <div class="img_side">
        <img src="@/assets/projects/Climbapp.png" alt="climbapp" />
        <!-- <img :src="require('@/assets/projects' + img + '')" alt="climbapp" /> -->
      </div>
    </div>
    <div class="blackCard">
      <div class="img_side">
        <img src="@/assets/projects/Circle.png" alt="climbapp" />
        <!-- <img :src="require('@/assets/projects' + img + '')" alt="climbapp" /> -->
      </div>
      <div class="text_side">
        <h2>{{ title }}</h2>
        <p>
          {{ description }}
        </p>
        <button class="projBtn" @click="openLink">Open Project</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjCard",
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

    methods: {
      // a function that takes the the id prop and returns true if it is even
      isEven(id) {
        return id % 2 === 0;
      },
    },
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
  padding: 5%;
  height: auto;
  background-color: #ffffff;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

h2 {
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Basement Grotesque";
  font-size: 64px;
}

p {
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Argentum Sans";
  font-size: 18px;
}

button {
  width: 80%;
  height: 40px;
  align-self: center;
  background-color: #ffe602;
  border: 4px solid black;
  box-shadow: 0.3rem 0.3rem black;
  font-family: "Basement Grotesque";
  font-size: 18px;
}

.yellowCard .img_side {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  /* width: 100%; */
  height: auto;
  background-color: #ffe602;
  padding: 50px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}

img {
  width: 80%;
  height: 80%;
  align-self: center;
  border: 4px solid black;
  border-radius: 40px;
}

.blackCard {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  border-radius: 40px;
  border: 8px solid black;
}

.blackCard > .text_side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 50%;
  margin: 0;
  padding: 0 5% 0%;
  height: auto;
  background-color: #ffffff;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}

.blackCard > .img_side {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 50%;
  height: auto;
  background-color: black;
  padding: 50px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
</style>
