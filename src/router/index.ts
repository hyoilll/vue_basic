import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import LikesView from '@/views/LikesView.vue'
import PostsView from '@/views/PostsView.vue'

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
      path: '/:id',
      name: 'profile',
      props: true,
      children: [
        {
          // pathで/から始まらない理由としては、/をつけると/:id/postsではなく、/postsのpathとして認識される。
          path: 'posts',
          name: 'posts',
          /**
           * 子パースで親パースを上書きする場合には、以下のように作成する。
           * 親パースを必ず一緒につけなければならない。
           * つけることで、'/posts/hyoil'にアクセスすると、ちゃんとidにhyoilが入ってくる。
           * path: '/posts/:id'
           */
          component: PostsView
        },
        {
          path: 'likes',
          name: 'likes',
          component: LikesView
        },
        {
          /**
           * defaultとして、表示したい場合にはpathに空欄を入れる。
           * そうすることで、/:idにアクセスすると以下のcomponentにアクセスすることになる。
           */
          path: '',
          name: 'default',
          component: '///'
        }
      ],
      component: () => import('../views/ProfileView.vue')
    }
    // {
    //   path: '/about',
    //   // name登録
    //   name: 'about',
    //   alias: ['/temp', '/aaa'], // 別名を指定する。
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // 以下のようにcomponentを指定すると、code-splittingを実施して、パフォーマンス向上の効果。
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/practice',
    //   // name登録
    //   name: 'practice',
    //   component: () => import('../views/PracticeView.vue')
    // },
    // {
    //   /**
    //    * :idの右側にカッコをつけることで正規表現を使えるようになる。
    //    * defaultとして、:id([^/]+)がついてる。/以外の文字全てOKという意味。
    //    *  */
    //   // path: '/blog/:id(\\d+)',
    //   // path: '/blog/:id+',　配列で受け取る
    //   // path: '/blog/:id?' idを指定しなくてもコンポーネントを表示する
    //   // path: '/blog/:id*' + と　？を合わせる
    //   // name登録
    //   path: '/blog/:id',
    //   alias: '/otherName/:id', // :id引数がついている時には同じようにつけておく。
    //   name: 'blog',
    //   component: () => import('../views/BlogView.vue')
    // },
    // {
    //   /**
    //    * routeの優先順位
    //    * routeの優先順位としては制限が強い方が優先される。
    //    * /about/:id VS /about/:id*
    //    * 上記の場合には左が優先される。pathの制限が強いため
    //    */
    //   path: '/:catchAll(.*)*',
    //   name: 'NotFound',
    //   // redirect: '/'
    //   // redirect: {name: 'home'}
    //   props: true,
    //   component: NotFound
    // }
  ]
})

export default router
