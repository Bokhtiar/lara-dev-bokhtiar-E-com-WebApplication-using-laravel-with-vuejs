export const routes = [
    {
        path:'/admin/dashboard/',
        component: () => import('./components/admin/AdminHome.vue'),

    },
    {
        path:'/admin/categories',
        component: () => import('./components/admin/AdminHome.vue'),
    }


]
