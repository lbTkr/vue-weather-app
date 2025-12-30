import {createWebHistory, createRouter} from 'vue-router';
import Title from '../components/Title.vue';

createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Title},
        // {path: '/portfolio', component: Portfolio},
        // {path: '/about', component: About}
    ],
});