import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import { firestorePlugin } from "vuefire";

createApp(App).use(router).mount("#app");
Vue.use(firestorePlugin);
