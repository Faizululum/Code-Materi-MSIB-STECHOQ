import { createRouter, createWebHistory } from "vue-router";
import AdminView from "../views/AdminViews.vue";
import UserView from "../views/UserViews.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "admin", params: { component: "items" } },
  },
  {
    path: "/admin/:component",
    name: "admin",
    component: AdminView,
    props: (route) => ({
      currentComponent: route.params.component || "items",
    }),
    meta: {
      requiresAuth: true,
      role: "admin",
    },
  },
  {
    path: "/user/:component",
    name: "user",
    component: UserView,
    props: (route) => ({
      currentComponent: route.params.component || "items",
    }),
    meta: {
      requiresAuth: true,
      role: "user",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = Boolean(localStorage.getItem("auth"));
  const userRole = localStorage.getItem("role");

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "login" });
  } else if (
    to.meta.requiresAuth &&
    isAuthenticated &&
    to.meta.role !== userRole
  ) {
    alert("You are not authorized to access this page");
    next(false);
  } else {
    next();
  }
});

export default router;
