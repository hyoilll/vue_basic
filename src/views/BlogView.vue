<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <h2>Blog(id: {{ props.id }})</h2>
    <RouterLink :to="{ name: 'blog', params: { id: Number(props.id) + 1 } }">Next Blog</RouterLink>
  </div>
</template>
