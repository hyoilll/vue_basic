<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

// if else
const isTrue = ref(true)
const changeValue = (): void => {
  isTrue.value = !isTrue.value
}

// if elseif else
const inputRef = ref('')
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- if else -->
      <div v-if="isTrue">hello world true</div>
      <div v-else>hello world false</div>
      <input @click="changeValue" type="button" value="changeValue" />

      <!-- if elseif else -->
      <div v-if="inputRef === 'A'">type A</div>
      <div v-else-if="inputRef === 'B'">type B</div>
      <div v-else-if="inputRef === 'C'">type C</div>
      <div v-else>type else</div>
      <input v-model="inputRef" type="text" />

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
