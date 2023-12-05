<script lang="ts" setup>
const props = defineProps({
  status: String
})
</script>

<template>
  <div class="status" :class="props.status">
    <span>
      <div class="dot"></div>
      {{ props.status }}</span
    >
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';
@import '../assets/sass/mixins.scss';
.status {
  justify-self: center;
  @include headingSmall;
  border-radius: 6px;
  width: 104px;
  height: 40px;
  display: grid;
  place-content: center;
  text-transform: capitalize;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .dot {
    border-radius: 50%;
    width: 8px;
    height: 8px;
  }

  &.paid {
    background-color: rgba(#33d69f, 0.06);
    span {
      color: var(--paid);

      .dot {
        background-color: var(--paid);
      }
    }
  }

  &.pending {
    background-color: rgba(#ff8f00, 0.06);
    span {
      color: var(--pending);

      .dot {
        background-color: var(--pending);
      }
    }
  }

  &.draft {
    background-color: var(--draftBackground);
    span {
      color: var(--draft);

      .dot {
        background-color: var(--draft);
      }
    }
  }
}
</style>
