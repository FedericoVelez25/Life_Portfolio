<template>
  <article class="contactSctn">
    <section class="textContainer">
      <h2>Let's Talk!</h2>
      <p>federico.velezferro@gmail.com</p>
    </section>
    <form class="contactForm" action="submit">
      <input type="text" name="name" id="name" placeholder="Name:" />

      <input type="text" name="email" id="email" placeholder="Email:" />

      <textarea
        type="text"
        name="message"
        class="message"
        id="message"
        placeholder="Message:"
      />
    </form>
    <button class="submitBtn">Submit</button>
    <div class="rrss">
      <img src="@/assets/rrss/linkedin.png" alt="linkedin" />
      <img src="@/assets/rrss/github.png" alt="github" />
      <img src="@/assets/rrss/spotify.png" alt="spotify" />
    </div>
  </article>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contactSctn {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10%;
  gap: 3em;
}
.textContainer {
  display: flex;
  flex-direction: column;
}
h2 {
  font-family: "Bubblegum";
  font-size: 140px;
}
p {
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
  width: 30%;
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
  align-self: center;
}
</style>
