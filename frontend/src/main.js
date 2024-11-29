import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import router from "./router";
import { createPinia } from 'pinia';
import { createPiniaMiddleware } from "./plugins/piniaMiddleware";
import { piniaPersistPlugin } from "./plugins/piniaPersist";

const pinia = createPinia();
pinia.use(createPiniaMiddleware());
pinia.use(piniaPersistPlugin);

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");