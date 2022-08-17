<template>
  <div>
    <div class="card">
      <div id="left_side">
        <h2>{{ title }}</h2>
        <p>
          {{ description }}
        </p>
        <button class="projBtn" @click="openLink">Open Project</button>
      </div>
      <div id="right_side">
        <img src="@/assets/projects/Climbapp.png" alt="climbapp" />
        <!-- <img :src="require('@/assets/projects' + img + '')" alt="climbapp" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjCard",
  props: {
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
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: auto;
  border-radius: 10px;
  border: 8px solid black;
}

#left_side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 50%;
  padding: 5%;
  height: auto;
  background-color: #ffffff;
}

#left_side h2 {
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Basement Grotesque";
  font-size: 64px;
}
#left_side p {
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Argentum Sans";
  font-size: 18px;
}

.projBtn {
  width: 80%;
  height: 40px;
  align-self: center;
  background-color: #ffe602;
  border: 4px solid black;
  box-shadow: 0.3rem 0.3rem black;
  font-family: "Basement Grotesque";
  font-size: 18px;
}

#right_side {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 50%;
  height: auto;
  background-color: #ffe602;
  padding: 50px;
}

#right_side img {
  width: 80%;
  height: 80%;
  align-self: center;
  border: 4px solid black;
  border-radius: 40px;
}
</style>
