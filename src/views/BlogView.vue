<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h2>Blog(id: {{ props.id }})</h2>
  <RouterLink :to="{ name: 'blog', params: { id: Number(props.id) + 1 } }">Next Blog</RouterLink>
</template>
