<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => (count.value += 1)
</script>

<template>
  <div class="practice">
    <h1>This is an practice page</h1>
    <div id="cnt">
      <button @click="increment">Count is: {{ count }}</button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .practice {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
