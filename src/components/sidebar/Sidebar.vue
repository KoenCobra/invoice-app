<script lang="ts" setup>
import AppLogo from './AppLogo.vue'
import ThemeSwitcher from './ThemeSwitcher.vue'
import User from './User.vue'
import Divider from './Divider.vue'
</script>

<template>
  <div class="sidebar">
    <AppLogo />
    <div class="user-settings">
      <ThemeSwitcher />
      <Divider />
      <User />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/sass/variables.scss';
.sidebar {
  background-color: var(--sidebar-bg);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0px 20px 20px 0px;

  .user-settings {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 1.5rem;
  }
}
</style>
