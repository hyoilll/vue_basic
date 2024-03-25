<script setup lang="ts">
const props = defineProps({
  meta: String
})
</script>

<template>
  <h2>Home</h2>
  <p>{{ props?.meta }}</p>
  <p>{{ $route?.meta }}</p>
</template>
