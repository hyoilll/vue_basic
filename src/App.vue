<script setup lang="ts"></script>

<template>
  <header>Vue Router</header>
  <main>
    <nav id="blog">
      <RouterLink to="/">Home</RouterLink>
      |
      <RouterLink :to="{ name: 'blog', params: { id: 3 }, hash: '#blog' }">Blog</RouterLink>
    </nav>
    <RouterView />
  </main>
</template>
