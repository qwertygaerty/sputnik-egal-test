import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import egalWidgets from "@egalteam/widget-library";
import "@egalteam/widget-library/dist/style.css";

createApp(App).use(egalWidgets).use(store).use(router).mount("#app");
