<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const router = useRouter()

const toAbout = (): void => {
  // コードからページを移動させる。
  /**
   * push vs replace
   * push: 前のページを履歴の残すので、前のページに戻ることができる。
   * replace: 前のページを履歴の残さないため、前のページに戻れずに、二つ前のページに戻ることになる。
   */
  router.push('/about')
  // router.replace('/about')

  /**
   * go
   * go: 引数に指定した数字分ページを移動する
   * ex) go(-1): 一つ前のページに移動
   *     go(3): 三つ先のページに移動
   */
  // router.go(3)
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <!-- aタグの代わりにRouterLinkを使うことでリンク間移動時にページリロードを防ぐ。 -->
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="'/about'">About</RouterLink>
        <RouterLink :to="{ path: '/practice', query: { lang: 'ja' }, hash: '#title' }"
          >Practice</RouterLink
        >
      </nav>
      <!-- scriptに定義する場合 -->
      <!-- <button @click="toAbout">toAbout</button> -->

      <!-- templateに定義する場合 -->
      <!-- 以下の$routerはscriptのconst router = useRouter()のrouterと同じObjectになる。 -->
      <button @click="$router.push('/about')">toAbout</button>
    </div>
  </header>

  <!-- routerで登録したコンポーネントがRouterViewを通じてブラウザに表示される。 -->
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
