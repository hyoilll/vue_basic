<script setup lang="ts">
/**
 * <RouterView />はシンプルな使い方で、URLに基づいて自動的にコンポーネントを表示します。
 * カスタマイズはできませんが、多くの場合にはこれで十分です。
 *
 * <RouterView v-slot="{ Component }">は、ルートにマッチしたコンポーネントに対して追加のカスタマイズを行いたい場合に使用します。
 * これにより、より複雑なレイアウトやアニメーション、条件付きのロジックを適用できますが、設定が少し複雑になります。
 *
 * Next Blogに移動した時には同じBlogViewコンポーネントを使い回しているため、Transitionが適用されないように見える。(mountされ、unMountされない）
 * 同じコンポーネントを使い回さ煮ようにするために、key属性を加える。
 */
</script>

<template>
  <header>Vue Router</header>
  <main>
    <nav id="blog">
      <RouterLink to="/">Home</RouterLink>
      |
      <RouterLink :to="{ name: 'blog', params: { id: 3 }, hash: '#blog' }">Blog</RouterLink>
    </nav>
    <RouterView v-slot="{ Component, route }">
      <Transition mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
    <!-- <Transition mode="out-in">
      <RouterView />
    </Transition> -->
  </main>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
