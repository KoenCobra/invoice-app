<script lang="ts" setup>
import Button from 'primevue/button'

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
  <Button :class="props.cssClass" class="app-btn">
    <div v-if="props.isIcon" class="plus-icon">
      <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
          fill="#7C5DFA"
          fill-rule="nonzero"
        />
      </svg>
    </div>
    <p>
      {{ props.text }}
    </p>
  </Button>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';
@import '../assets/sass/mixins.scss';
.app-btn {
  border-radius: 100vh;
  padding: 0.8rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    color: var(--white);
    @include headingSmall;
  }

  &.primary {
    background-color: var(--mainPurple);
  }

  &.red {
    background-color: var(--red);
  }

  .plus-icon {
    background-color: var(--white);
    border-radius: 50%;
    display: grid;
    place-content: center;
    width: 32px;
    height: 32px;
    margin: -1rem 0 -1rem -1rem;
  }
}
</style>
