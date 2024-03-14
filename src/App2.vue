<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const author = reactive({
  name: 'hyoil',
  books: [['Vue 2 - hello', 'Vue 3 - world', 'Vue 4 - Vue']]
})

/**
 * 算出プロパティが依存するリアクティブなデータ（この例ではauthor.books）の変更を追跡
 * 依存するデータに変更があった場合に限り、算出プロパティの関数を再評価
 * 関連するデータが変わらない限り、算出プロパティの結果はキャッシュされ、再計算されることはない
 * @return 返り値は 算出された ref
 */
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'yes' : 'no'
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <div class="hello">{{ publishedBooksMessage }}</div>

      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/practice">Practice</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.hello {
  color: red;
  font-size: 40px;
}

.increBtn {
  margin-right: 20px;
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
