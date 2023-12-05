<script lang="ts" setup></script>

<template>
  <RouterLink to="/">
    <div class="back-btn">
      <img src="/assets/icon-arrow-left.svg" alt="back" />
      <p>Go Back</p>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';
@import '../assets/sass/mixins.scss';

.back-btn {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: var(--textColor);
  p {
    @include headingSmall;
  }
}
</style>
