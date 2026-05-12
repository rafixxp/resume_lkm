import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/materi',
        name: 'Blog',
        component: () => import('../views/Blog.vue')
    },
    {
        path: '/materi/:slug',
        name: 'DetailBlog',
        component: () => import('../views/DetailBlog.vue')
    }
  ]
})

export default router