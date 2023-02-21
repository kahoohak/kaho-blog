import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        meta: { layout: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router };
