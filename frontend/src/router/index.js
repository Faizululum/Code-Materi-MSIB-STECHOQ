import { createRouter, createWebHistory } from "vue-router";
import AdminView from "../views/AdminViews.vue";
import UserView from "../views/UserViews.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/admin/:component?",
    name: "admin",
    component: AdminView,
  },
  {
    path: "/user/:component?",
    name: "user",
    component: UserView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
