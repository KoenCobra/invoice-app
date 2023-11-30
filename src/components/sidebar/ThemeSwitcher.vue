<script lang="ts" setup>
const body = document.querySelector('body')
</script>

<template>
  <button @click="body?.classList.toggle('dark')">
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
