import {createWebHistory, createRouter} from 'vue-router';
import TitleComp from '../components/Title.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: TitleComp},
        // {path: '/portfolio', component: Portfolio},
        // {path: '/about', component: About}
    ],
});

export default router;