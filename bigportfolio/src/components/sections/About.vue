<template>
  <div class="containerFlex">
    <div class="textBox">
      <p>
        Since graduating from ad school, I've dedicated my time to learning new
        skills and techniques to develop a greater vision of digital businesses
        and create high-impact ideas.<br />
        Whatever the challenge, I'll search in my toolbox to make it happen.
      </p>
    </div>

    <div class="picture">
      <img src="../../assets/myPicture.png" alt="federico" />
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.containerFlex {
  border: 8px solid black;
  background-color: #ff7262;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
}
.textBox p {
  font-family: "Argentum Sans";
  font-size: 18px;
  padding-left: 10%;
  padding-right: 10%;
}
</style>
