import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog/:id',
      name: 'blog',
      props: true,
      // component: BlogView
      component: () => import('@/views/BlogView.vue')
    }
  ]
})

export default router
