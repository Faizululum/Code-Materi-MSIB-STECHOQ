import { createRouter, createWebHistory } from "vue-router";
import AdminView from "../views/AdminViews.vue";
import UserView from "../views/UserViews.vue";

const routes = [
  {
    path: '/',
    redirect: { name: 'admin', params: { component: 'items' } },
  },
  {
    path: "/admin/:component",
    name: "admin",
    component: AdminView,
    props: true,
  },
  {
    path: "/user/:component",
    name: "user",
    component: UserView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
