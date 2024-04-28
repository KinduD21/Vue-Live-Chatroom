import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import { projectAuth } from "./firebase/config";

let app;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).use(createPinia()).mount("#app");
  }
});
