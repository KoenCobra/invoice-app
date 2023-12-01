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
    default: false
  }
})
</script>

<template>
  <button :class="cssClass" class="app-button">
    <div v-if="isIcon" class="plus-icon">
      <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
          fill="#7C5DFA"
          fill-rule="nonzero"
        />
      </svg>
    </div>
    <span>
      {{ text }}
    </span>
  </button>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';
.app-button {
  border-radius: 100vh;
  padding: 0.8rem 1.5rem;
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

  .plus-icon {
    background-color: var(--white);
    border-radius: 50%;
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    margin: -1rem 0 -1rem -1rem;
  }
}
</style>
