import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/opiniones",
    name: "Opiniones",
    // props: true,
    component: () => import(/* webpackChunkName: "Opiniones" */ "../views/Opiniones.vue"),
  },
  {
    path: "/opinion/:id",
    name: "Opinion",
    props: true,
    component: () => import(/* webpackChunkName: "Opinion" */ "../views/Opinion.vue"),
  },
  {
    path: "/administracion",
    name: "Administracion",
    // props: true,
    component: () => import(/* webpackChunkName: "Administracion" */ "../views/Administracion.vue"),
  },
  {
    path: "*",
    name: "error",
    // props: true,
    component: () => import(/* webpackChunkName: "error" */ "../views/Notfound.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
