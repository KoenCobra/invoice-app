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
      <img src="/assets/icon-plus.svg" alt="plus" />
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
  transition: all 0.2 s ease-in-out;

  p {
    color: var(--white);
    @include headingSmall;
  }

  &.primary {
    background-color: var(--mainPurple);
    &:hover {
      background-color: var(--lightPurple);
    }
  }

  &.red {
    background-color: var(--red);
    &:hover {
      background-color: var(--lightRed);
    }
  }

  &.edit {
    background-color: var(--editBtnBackground);
    p {
      color: var(--grayishBlue) !important;
    }

    &:hover {
      background-color: var(--lightGrayishBlue);
    }
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
