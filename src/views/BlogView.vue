<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

/**
 * 引数やクエリやhashなどが変わる時にだけ実行されるナビゲーションガード
 * 使い方は他のナビゲーションガードと一緒。
 *
 * よって、paramsやhashの変更を検知したい場合には
 * onBeforeRouteUpdate関数を使っても良いし、propsなどをwatchしても良い
 */
onBeforeRouteUpdate(() => {
  console.log('onBeforeRouteUpdate')
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
