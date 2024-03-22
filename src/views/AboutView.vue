<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- paramsを使う場合にはpath propsと一緒に使うとparamsが無視されるので、必ずname propsと一緒に使うこと。 -->
    <RouterLink :to="{ name: 'blog', params: { id: 3 } }">toBlog</RouterLink>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
