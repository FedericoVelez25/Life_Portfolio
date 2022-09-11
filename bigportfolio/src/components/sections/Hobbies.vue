<template>
  <section class="sectionFlex">
    <div class="relativeContainer">
      <h2 class="hobbies">Hobbies</h2>
    </div>
    <div class="containerFlex">
      <a id="handcrafts" href="">Handcrafts</a>
      <a id="climbing" href="">Climbing</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hobbies",
};
</script>

<style>
.relativeContainer {
  display: flex;
  justify-content: center;
  position: relative;
}

.hobbies {
  width: 50%;
  padding: 2%;
  background-color: white;
  text-align: center;
  text-justify: center;
  border: 4px solid black;
  position: absolute;
  top: -80px;
  border-radius: 40px;
  font-family: "Basement Grotesque";
  font-size: 80px;
}
.containerFlex {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
}

a {
  font-family: "Bubblegum";
  font-size: 80px;
}

#handcrafts {
  background-color: #20fc8f;
  padding: 5%;
  width: 50%;
  padding-top: 10%;
  padding-bottom: 10%;
  text-justify: center;
  text-align: center;
  border: 4px solid black;
}
#climbing {
  background-color: #ff7262;
  padding: 5%;
  padding-top: 10%;
  padding-bottom: 10%;
  width: 50%;
  text-justify: center;
  text-align: center;
  border: 4px solid black;
}
</style>
