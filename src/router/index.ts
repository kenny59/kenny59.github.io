import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import CurriculumVitaeView from "@/views/CurriculumVitaeView.vue";
import MainView from "@/views/MainWrapper.vue";

declare module "vue-router" {
    interface RouteMeta {
        title?: string;
    }
}

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
                    component: HomeView,
                    meta: {
                        title: 'Tibor Szűcs Portfolio'
                    }
                },
                {
                    path: 'cv',
                    name: 'cv',
                    component: CurriculumVitaeView,
                    props: { lang: "en" },
                    meta: {
                        title: 'TiborSzucsEng.pdf'
                    }
                },
                {
                    path: 'cvHun',
                    name: 'cvHun',
                    component: CurriculumVitaeView,
                    props: { lang: "hu" },
                    meta: {
                        title: 'SzucsTiborHun.pdf'
                    }
                }
            ]
        },
        {
            path: '/:catchAll(.*)',
            component: HomeView
        }
    ]
});

router.beforeEach((to, _from, next) => {
    document.title = to.meta.title || 'Tibor Szűcs Portfolio';
    next();
})

export default router;