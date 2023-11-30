<script lang="ts" setup>
import Sidebar from './components/sidebar/Sidebar.vue'
</script>

<template>
  <main>
    <Sidebar />
    <div class="page">
      <RouterView />
    </div>
  </main>
</template>
<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: auto 1fr;

  .page {
    height: 100vh;
    height: 100svh;
    overflow-y: auto;
  }
}
</style>
