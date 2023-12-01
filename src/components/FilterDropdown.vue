<script lang="ts" setup>
import Checkbox from 'primevue/checkbox'
import { ref } from 'vue'
const status = ref()
</script>

<template>
  <div class="filter-drowndown">
    <button>
      <p>Filter by status</p>
      <img src="/assets/icon-arrow-down.svg" alt="" />
    </button>

    <div class="dropdown">
      <div class="dropdown-item">
        <Checkbox v-model="status" name="status" value="Draft" />
        <label> Draft </label>
      </div>
      <div class="dropdown-item">
        <Checkbox v-model="status" name="status" value="Pending" />
        <label> Pending </label>
      </div>
      <div class="dropdown-item">
        <Checkbox v-model="status" name="status" value="Paid" />
        <label> Paid </label>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';
@import '../assets/sass/mixins.scss';

.filter-drowndown {
  position: relative;
  button {
    p {
      @include headingSmallVariant;
      color: var(--textColor);
    }
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .dropdown {
    width: 192px;
    position: absolute;
    top: 3rem;
    left: -2rem;
    padding: 1.5rem;
    border-radius: 8px;
    background: var(--background);
    box-shadow: 0px 10px 20px 0px rgba(72, 84, 159, 0.25);
    display: grid;
    gap: 0.5rem;

    .dropdown-item {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: var(--textColor);

      label {
        @include headingSmallVariant;
      }
    }
  }
}
</style>
