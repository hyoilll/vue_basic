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
      component: BlogView
    }
  ],
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
  scrollBehavior: (to, from, savedPosition) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(to, from, savedPosition)
        if (savedPosition) {
          return resolve(savedPosition)
        }

        if (to.hash) {
          return resolve({
            el: to.hash,
            top: 10
            // behavior: 'smooth'
          })
        }
        return resolve({
          top: 0
        })
      }, 2000)
    })
  }
})

export default router
