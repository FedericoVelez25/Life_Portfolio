<template>
  <div class="epicContainerFlex">
    <div class="hello">
      <img
        id="text_box"
        src="@/assets/hero/white_text_box.png"
        alt="text box"
      />
      <p id="federico">Hi!<br />I'm Federico</p>
    </div>
    <div class="info">
      <p id="intro_text">
        A <span style="color: #ffe602">Front-End developer</span> with
        background in advertising and digital marketing. Originally from Bogota,
        and now living in <span style="color: #ffe602">Barcelona.</span>
      </p>
    </div>
    <div class="projects">
      <ProjCard
        class="proj_cards"
        v-for="project in projects"
        :key="project.id"
        :id="project.id"
        :title="project.title"
        :description="project.description"
        :img="project.img"
        :link="project.link"
      />
    </div>
  </div>
</template>

<script>
import ProjCard from "@/components/pieces/ProjCard.vue";
export default {
  name: "WallContentSection",
  components: {
    ProjCard,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "ClimbApp",
          description:
            "I'm passionate about rock climbing, so I wanted to create a climbing log to keep track of my climbs.",
          img: "Climbapp.png",
          link: "https://unique-gelato-e1bfb4.netlify.app",
        },
        {
          id: 2,
          title: "Circle Agency",
          description:
            "Web development for Circle Agency. This was one of my Ironhack projects and the first responsive website I've ever built.",
          img: "Circle.png",
          link: "https://dreamy-swartz-c19211.netlify.app",
        },
        {
          id: 3,
          title: "To-Do",
          description:
            "If you're going on an adventure, it's crucial to have a To-Do list for the essentials in the wild.",
          img: "To_Do.png",
          link: "https://climbapp.netlify.app/",
        },
        {
          id: 4,
          title: "Weather App",
          description:
            "And, of course, part of planning an adventure is to be aware of the weather. A great starter project to start experimenting with an API. This weather app changes the background depending on the temperature.",
          img: "Weatherapp.png",
          link: "https://climbapp.netlify.app/",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* TEXT CLOUD */
.epicContainerFlex {
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-content: flex;
  width: 100%;
}

.hello {
  z-index: 20;
  display: flex;
  justify-content: flex-start;
  position: relative;
  margin-top: 10%;

  /* width: 100%; */
}
#federico {
  color: black;
  text-align: center;
  font-family: "Bubblegum";
  font-size: 70px;
  position: absolute;
  left: 500px;
  top: 70px;
  left: 70px;
  z-index: 10;
}

/* INTRO TEXT */

.info {
  display: flex;
  flex-direction: row;
  z-index: 10;
  width: auto;
  justify-content: flex-end;
  text-align: center;
  margin-top: 15%;
  padding-right: 90px;
}

#intro_text {
  /* position: relative;
  top: 700px;
  left: 250px; */
  color: white;
  font-family: "Bubblegum";

  text-align: end;
  font-size: 40px;
  width: 40vw;
  z-index: 10;
}

/* PROJECTS SECTION */

.projects {
  margin-top: 30%;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80%;
}

/* .proj_cards {
  display: flex;
  justify-content: center;
  width: 100%;
} */
</style>
