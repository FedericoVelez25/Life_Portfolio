<template>
  <div class="cloud_container">
    <img id="cloud_1" src="@/assets/hero/cloud_1.png" alt="cloud" />
    <img
      id="cloud_projects"
      src="@/assets/hero/cloud_projects.png"
      alt="cloud"
    />
    <img id="cloud_3" src="@/assets/hero/cloud_3.png" alt="cloud" />
    <img id="cloud_4" src="@/assets/hero/cloud_4.png" alt="cloud" />
  </div>
</template>

<script>
export default {
  name: "SkyBackground",
};
</script>

<style>
.cloud_container {
  background-color: aqua;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  height: 5000px;
  width: 100%;
}
</style>
