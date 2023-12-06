<script lang="ts" setup>
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
</script>

<template>
  <button @click="themeStore.toggleTheme">
    <div class="theme-switcher"></div>
  </button>
</template>

<style lang="scss" scoped>
@import '../../assets/sass/variables.scss';

.theme-switcher {
  background-image: var(--theme-switcher);
  width: 19.988px;
  height: 19.905px;
}
</style>
