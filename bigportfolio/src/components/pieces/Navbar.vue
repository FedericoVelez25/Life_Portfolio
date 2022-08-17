<template>
  <div class="nav-container">
    <div class="nav-links">
      <a id="logo" href="#">Frico</a>
      <ul class="links">
        <li><a id="projects" href="#">Projects</a></li>
        <li><a id="about" href="#">About Me</a></li>
        <li><a id="contact" href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.nav-container {
  font-family: "Bubblegum";
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 100px;
  height: 80px;
  background-color: black;
}
.nav-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  list-style-type: none;
}

#logo {
  color: white;
  font-size: 60px;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 5px;
}

.links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 100%;
  list-style-type: none;
  text-decoration: none;
}

#projects,
#about,
#contact {
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>
