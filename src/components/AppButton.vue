<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String
  },
  cssClass: {
    type: String
  },
  isIcon: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <button :class="cssClass" class="app-button">
    <svg v-if="isIcon" width="11" height="11" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
        fill="#fff"
        fill-rule="nonzero"
      />
    </svg>
    <span>
      {{ text }}
    </span>
  </button>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';
.app-button {
  border-radius: 100vh;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    color: var(--white);
    font-size: 0.9375rem;
    font-weight: 700;
    letter-spacing: -0.25px;
  }

  &.primary {
    background-color: var(--mainPurple);
  }
}
</style>
