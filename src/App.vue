<script setup lang="ts"></script>

<template>
  <header>Vue Router</header>
  <main>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      |
      <RouterLink :to="{ name: 'blog', params: { id: 3 } }">Blog</RouterLink>
    </nav>
    <RouterView />
  </main>
</template>
