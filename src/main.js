import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./styles/styles.scss"; // Bootstrap variables sass

// prettier-ignore
createApp(App)
    .use(store)
    .use(router)
    .mount("#app");
