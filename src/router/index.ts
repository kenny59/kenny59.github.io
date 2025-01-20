import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import CurriculumVitaeView from "@/views/CurriculumVitaeView.vue";
import MainView from "@/views/MainWrapper.vue";

const router = createRouter({
    scrollBehavior() {
        return { top: 0 }
    },
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: MainView,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: HomeView
                },
                {
                    path: 'cv',
                    name: 'cv',
                    component: CurriculumVitaeView
                }
            ]
        },
        {
            path: '/:catchAll(.*)',
            component: HomeView
        }
    ]
});

export default router;