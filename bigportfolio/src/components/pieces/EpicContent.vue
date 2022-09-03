<template>
  <div class="epicContainerFlex">
    <div class="hello">
      <img id="text_box" src="@/assets/hero/federico.png" alt="text box" />
    </div>
    <img
      class="cloud"
      id="cloud_1"
      src="@/assets/hero/clouds/cloud_1.png"
      alt="cloud"
    />
    <div class="info">
      <p id="intro_text">
        A <span style="color: #ffe602">Front-End developer</span> with a
        background in <span style="color: #ffe602">advertising</span> and
        <span style="color: #ffe602">digital marketing</span>. Originally from
        Bogota, and now living in <span style="color: #ffe602">Barcelona.</span>
      </p>
    </div>
    <img
      class="cloud"
      id="cloud_projects"
      src="@/assets/hero/clouds/cloud_projects.png"
      alt="cloud"
    />
    <img
      class="cloud"
      id="cloud_3"
      src="@/assets/hero/clouds/cloud_3.png"
      alt="cloud"
    />
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
    <img
      class="cloud mt-20"
      id="cloud_4"
      src="@/assets/hero/clouds/cloud_4.png"
      alt="cloud"
    />
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
  margin-top: 15%;
  margin-left: 7%;

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
  margin-top: 5%;
  padding-right: 5%;
}

#intro_text {
  color: white;
  font-family: "Bubblegum";
  text-align: end;
  font-size: 50px;
  text-transform: uppercase;
  width: 45vw;
  z-index: 10;
}

/* PROJECTS SECTION */

.projects {
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80%;
}

#cloud_1 {
  margin-top: 10%;
  width: 30%;
}

#cloud_projects {
  margin-top: 50%;
  width: 50%;
}

#cloud_3 {
  margin-top: -50px;

  align-self: flex-start;
}
#cloud_4 {
  margin-top: 50px;
  align-self: flex-start;
}
</style>
