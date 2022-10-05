<template>
  <article class="contactSctn">
    <section class="textContainer">
      <div class="underlineText">
        <h2>Let's Talk!</h2>
        <div class="underline"></div>
      </div>
      <p class="myEmail">federico.velezferro@gmail.com</p>
      <div class="rrss">
        <img src="@/assets/rrss/linkedin.png" alt="linkedin" />
        <img src="@/assets/rrss/github.png" alt="github" />
        <img src="@/assets/rrss/spotify.png" alt="spotify" />
      </div>
    </section>

    <!-- <div v-if="showContact == true" class="sectnContainer">
      <div v-if="contactNotice != ''" class="alert" role="alert">
        <div class="danger px-4 py-2">Ups!</div>
        <div class="dangerText px-4 py-3">
          <p>Something went wrong. {{ contactNotice }}</p>
        </div>
      </div>
      <form
        @submit.prevent="sendContactMessage()"
        class="contactForm"
        action="submit"
      >
        <input
          v-model="nameFrom"
          type="text"
          name="name"
          id="name"
          placeholder="Name:"
        />

        <input
          v-model="emailFrom"
          type="text"
          name="email"
          id="email"
          placeholder="Email:"
        />

        <textarea
          v-model="contactMessage"
          type="text"
          name="message"
          class="message"
          id="message"
          placeholder="Message:"
        />
        <button class="submitBtn">Submit</button>
      </form>
    </div>
    <div v-else class="successMessage">
      <h3 class="successTitle">Message Sent Succesfully!</h3>
      <p class="successThanks">
        Thanks for getting in touch, I'll get back to you as soon as possible.
      </p>
    </div> -->
  </article>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      showContact: true,
      contactName: "",
      contactEmail: "",
      contactMessage: "",
      contactNotice: "",
    };
  },
  methods: {
    sendContactMessage() {
      if (!this.validEmail(this.contactEmail)) {
        this.contactNotice = "The email address is badly formatted";
      } else if (this.contactMessage.length < 10) {
        this.contactNotice = "Your message is too short";
      } else {
        const url = `https://us-central1-portfolio-25e0f.cloudfunctions.net/sendEmail?nameFrom=${this.contactName}&emailFrom=${this.contactEmail}&message=${this.contactMessage}`;
        const requestOptions = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        };
        fetch(url, requestOptions);
        this.showContact = false;
      }
    },

    validEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>
.contactSctn {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.sectnContainer {
  display: flex;
  flex-direction: column;
  text-align: center;
  /* justify-content: center; */
  /* align-content: center; */
  padding: 10%;
  gap: 3em;
}

.textContainer {
  display: flex;
  flex-direction: column;
  margin: 10%;
}
.underlineText {
  display: flex;
  flex-direction: column;
  position: relative;
}

.underline {
  width: 60%;
  height: 40px;
  background-color: #ffe602;
  align-self: center;
  position: absolute;
  top: 120px;
  z-index: -1;
}
h2 {
  font-family: "Bubblegum";
  font-size: 140px;
}
.myEmail {
  font-family: "Basement Grotesque";
  font-size: 40px;
}

.contactForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  align-self: center;
  gap: 2em;
  text-align: left;
  font-family: "Basement Grotesque";
}

.contactForm input {
  padding: 1em;
  border: 4px solid black;
  border-radius: 20px;
}

#message {
  border: 4px solid black;
  border-radius: 20px;
  padding: 1em;
  height: 30vh;
}
.submitBtn {
  width: 40%;
  height: auto;
  align-self: center;
  background-color: #ffe602;
  border: 4px solid black;
  border-radius: 40px;
  box-shadow: 0.3rem 0.3rem black;
  font-family: "Basement Grotesque";
  font-size: 50px;
}

.rrss {
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-top: 50px;
  margin-bottom: 50px;
  align-self: center;
}

.successMessage {
  margin: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 50px;
}

.successTitle {
  font-family: "Bubblegum";
  font-size: 100px;
}
.successThanks {
  font-size: 30px;
  width: 80%;
  align-self: center;
}

.alert {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-self: center;
}

.danger {
  background-color: #ffe602;
  font-family: "Bubblegum";
  font-size: 50px;
}

.dangerText {
  background-color: black;
}

.dangerText {
  font-family: "Basement Grotesque";
  color: white;
  font-size: 20px;
}
</style>
