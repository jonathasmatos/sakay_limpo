import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('../pages/Dashboard.vue')
                },
                {
                    path: '/pagesformlayout',
                    name: 'formlayout',
                    component: () => import('../pages/FormLayout.vue')
                },
            ]
        },
    ]
});

export default router;
