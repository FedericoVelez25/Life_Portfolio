<template>
  <div class="cloud_container">
    <img
      class="cloud"
      id="cloud_1"
      src="@/assets/hero/cloud_1.png"
      alt="cloud"
    />
    <img
      class="cloud"
      id="cloud_projects"
      src="@/assets/hero/cloud_projects.png"
      alt="cloud"
    />
    <img
      class="cloud"
      id="cloud_3"
      src="@/assets/hero/cloud_3.png"
      alt="cloud"
    />
    <img
      class="cloud"
      id="cloud_4"
      src="@/assets/hero/cloud_4.png"
      alt="cloud"
    />
  </div>
</template>

<script>
export default {
  name: "SkyBackground",
};
</script>

<style>
.cloud_container {
  z-index: -1;
  position: absolute;
  background-color: aqua;
  display: flex;
  flex-direction: column;
  height: 5252px;
  width: 100%;
  box-sizing: border-box;
  border: 4px solid black;
}

.cloud {
  width: 30%;
  height: auto;
}

@media screen and (max-width: 768px) {
  /* .cloud_container {
    height: 3248px;
  } */
}
</style>
