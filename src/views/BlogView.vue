<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

onMounted(() => {
  console.log('onMounted')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
</script>

<template>
  <div>
    <h2>Blog(id: {{ props.id }})</h2>
    <RouterLink :to="{ name: 'blog', params: { id: Number(props.id) + 1 } }">Next Blog</RouterLink>
  </div>
</template>
