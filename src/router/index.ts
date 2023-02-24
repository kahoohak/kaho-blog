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
    {
        path: "/article",
        component: () => import("@/views/article/index.vue"),
        meta: { layout: true },
    },
    {
        path: "/demo",
        component: () => import("@/views/demo/index.vue"),
        meta: { layout: true },
    },
    {
        path: "/demo-three-person",
        component: () => import("@/views/demo/three/person.vue"),
        meta: { layout: true },
    },
    {
        path: "/aboutMe",
        component: () => import("@/views/aboutMe/index.vue"),
        meta: { layout: true },
    },
    {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        meta: { layout: false },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router };
