<template>
  <div class="big_wall"></div>
</template>

<script>
export default {
  name: "BigWall",
};
</script>

<style>
.big_wall {
  background-image: url(../../assets/hero/big_wall_climb.png);
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 366%; /* (img-height / img-width * container-width) */
  /* (5248 / 1440.5 * 100) */
  width: 100%;
  margin-bottom: -25px;
  /* position: relative; */
  display: flex;
  flex-direction: column;
  background-color: #29c2ff;
}
</style>
