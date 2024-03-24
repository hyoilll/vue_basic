<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h2>Profile(@{{ props.id }})</h2>
  <RouterLink :to="{ name: 'posts' }">toPosts</RouterLink>
  <RouterLink :to="{ name: 'likes' }">toLikes</RouterLink>
  <RouterView />
  <RouterView name="SideBar" />
  <RouterView name="Footer" />
</template>
