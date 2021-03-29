import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/layout/Dashboard.vue'),
    children: [{
        path: "/autores",
        name: "Autores",
        component: () => import("@/views/autores/Index.vue"),
      },
      {
        path: "/publicaciones",
        name: "Publicaciones",
        component: () => import("@/views/publicaciones/Index.vue"),
      },
    ],
  },

];


const router = new VueRouter({
mode: 'history',
base: process.env.BASE_URL,
routes,
});

export default router;  