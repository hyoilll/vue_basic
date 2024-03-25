import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { transition: 'fade' },
      component: HomeView
    },
    {
      path: '/blog/:id',
      name: 'blog',
      props: true,
      // meta: { requireAuth: true },
      meta: { transition: 'slide' },
      component: BlogView,
      /**
       * pathごとにナビゲーションガードを設定することも可能。
       * /blog/:idにアクセスする時にだけ、beforeEnter関数が実行される。
       * 使い方はbeforeEachと一緒。引数やredirectなど。
       *
       * beforeEach VS beforeEnter
       * beforeEachが優先順位が高い。
       *
       * beforeEnter: [function1, function2]
       * 関数を配列に入れて指定することも可能。
       * 左から順番で実行される。
       *
       * next buttonを押してもbeforeEnterは実行されない。
       * 同じコンポーネントとして認識されるので、最初だけbeforeEnter関数が呼ばれる。
       */
      beforeEnter() {
        console.log('beforeEnter')
      }
    }
  ]
  /**
   * route間ページ移動が行われると以下の関数は必ず呼び出されるので、
   * ページ移動時にtopの0pxまで移動することを意味する。
   * top:100、の場合にはtopから100pxを離れたところまでスクロールするという意味。
   *
   * el属性を利用すると、該当するセレクターまでスクロールするという意味。
   * el:'#blog'に設定すると、タグのうちid='blog'を属性を持っているタグまでスクロールされる。
   *
   * 引数を受け取ることも可能。
   * よく使われる引数として、toとfromがある。
   * to: 移動先ページ情報
   * from: 移動元のページ情報
   * 以下の例は移動先にhash情報が含まれているとそのタグまでスクロールさせて、かつ10px上までスクロールさせる。
   * hashが含まれてなかったら、一番上までスクロールさせる。
   *
   * savedPosition情報も引数として、受け取ることが可能。
   * 前に戻るボタンを押すと前のスクロール情報をもとにスクロールさせることが可能になる。
   *
   * スクロールのさせ方を指定することも可能。
   * behavior属性を利用することが可能になる。
   * defaultはinstant、smoothを指定することでスムーズにスクロールさせることができる。
   *
   * スクロールの動作を遅延させるのはPromiseを使うことでできる
   * Promiseで2秒後に動作させることで、Transitionと組み合わせてTransitionの2秒間動作が終わるまで、
   * スクロールさせずに、2秒後にスクロールさせる動作を実現させるにはPrommiseを利用すれば便利。
   */
  // scrollBehavior: (to, from, savedPosition) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       console.log(to, from, savedPosition)
  //       if (savedPosition) {
  //         return resolve(savedPosition)
  //       }

  //       if (to.hash) {
  //         return resolve({
  //           el: to.hash,
  //           top: 10
  //           // behavior: 'smooth'
  //         })
  //       }
  //       return resolve({
  //         top: 0
  //       })
  //     }, 2000)
  //   })
  // }
})

/**
 * ナビゲーションガード
 *
 * beforeEach
 * ページ移動する前に実行される関数
 * スクロール関数と同じように移動先と移動元を引数として、受け取ることができる。
 * 返り値を指定することでページ移動を防ぐことも可能で、特定のページ移動だけ許可することも可能。
 * 以下のname属性は上にcreateRouterでつけたname属性をさしているよう。
 */
router.beforeEach((to, from) => {
  // console.log('beforeEach', to, from)
  /**
   * １。metaの使い方として、移動先ページで認証が求められるかつ、ログインされていない時には'/'にredirectさせる。
   *
   * ２。他の使い方として、動的コンポーネントにそれぞれ属性を追加するとき。
   */
  // if (to?.meta?.requireAuth && !isLogin) {
  //   return '/'
  // }
  // 移動先がblogページだったら、ページ移動を防ぐ
  // if (to.name === 'blog') return false
  // 移動先がhome場合のみ、ページ移動を許可する。
  // if (to.name === 'home') return true
  // else return false
  // redirectさせることも可能
  // 移動先がblogだったら、homeページにredirectさせる。
  // if (to.name === 'blog') return { name: 'home' }
})

/**
 * ページの移動が完了する直前に呼ばれる。
 * 使い方は他のナビゲーションガードと一緒。
 */
router.beforeResolve(() => {
  console.log('beforeResolve')
})

/**
 * ページの移動が終わった後に呼ばれる。
 * ページの移動が終わった後に実行されるので、return falseしてもページ移動を防ぐことができない。
 * よって、正確にはナビゲーションガードではない。
 *
 * レンダリングの流れとして、afterEachの処理が終わった後に、DOMの更新が行われる。
 * DOM更新の前に何か行いたい時に使う。
 */
router.afterEach(() => {
  console.log('afterEach')
})

export default router
