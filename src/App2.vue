<script setup lang="ts">
import { ref, reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const state = reactive({
  count: 0
})

const bindNa = ref('hello')

const increment = (cnt: number): void => {
  cnt += 1
}
const decrement = (cnt: number): void => {
  cnt -= 1
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- 以下のbtnをクリックしても切り離された普通のローカル変数になったため、state.countの値は変わらない-->
      <div :class="bindNa">{{ state.count }}</div>
      <button class="increBtn" @click="increment(state.count)">increment</button>
      <button @click="decrement(state.count)">decrement</button>

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
