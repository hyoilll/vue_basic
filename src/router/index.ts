import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

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
      /**
       * :idの右側にカッコをつけることで正規表現を使えるようになる。
       * defaultとして、:id([^/]+)がついてる。/以外の文字全てOKという意味。
       *  */
      // path: '/blog/:id(\\d+)',
      // path: '/blog/:id+',　配列で受け取る
      // path: '/blog/:id?' idを指定しなくてもコンポーネントを表示する
      // path: '/blog/:id*' + と　？を合わせる
      // name登録
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      /**
       * routeの優先順位
       * routeの優先順位としては制限が強い方が優先される。
       * /about/:id VS /about/:id*
       * 上記の場合には左が優先される。pathの制限が強いため
       */
      path: '/:catchAll(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
