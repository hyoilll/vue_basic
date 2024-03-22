<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route?.params?.id)

// このコンポーネントはunMountされないため、watchを使って新しいページに移動したことを検知する。
watch(route, () => {
  console.log('watch: ', route?.params?.id)
})

onMounted(() => {
  console.log('onMounted')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
</script>

<template>
  <!-- グローバル変数の$routeを使ってURLのparams情報が取得できる。 -->
  <div>Blog (id:{{ $route?.params?.id }})</div>
  <!-- 以下のボタンを押下して次のページに移動したとしても、このコンポーネントがunMountされて再度mountされることはない。 -->
  <!-- onMounted()とonUnmounted()で確認する -->
  <RouterLink :to="{ name: 'blog', params: { id: Number($route?.params?.id) + 1 } }"
    >Next</RouterLink
  >
</template>
