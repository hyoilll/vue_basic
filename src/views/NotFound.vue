<script setup>
const props = defineProps({
  catchAll: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <p>Not Found</p>
    <p>{{ $route?.params?.catchAll }}</p>
    <p>{{ props.catchAll }}</p>
  </div>
</template>
