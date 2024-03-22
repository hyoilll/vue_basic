import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name登録
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      // name登録
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 以下のようにcomponentを指定すると、code-splittingを実施して、パフォーマンス向上の効果。
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/practice',
      // name登録
      name: 'practice',
      component: () => import('../views/PracticeView.vue')
    },
    {
      path: '/blog/:id',
      // name登録
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    }
  ]
})

export default router
