<script lang="ts" setup>
import Sidebar from './components/sidebar/Sidebar.vue'
</script>

<template>
  <main>
    <Sidebar />
    <RouterView />
  </main>
</template>
<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>
