<script lang="ts" setup>
import AppButton from '../AppButton.vue'
import FilterDropdown from '../FilterDropdown.vue'
</script>

<template>
  <div class="invoices-header">
    <div class="title">
      <h1>Invoices</h1>
      <p>There are """0""" total invoices</p>
    </div>
    <div class="filter-dropdown">
      <FilterDropdown />
    </div>
    <div class="new-invoice">
      <AppButton cssClass="primary" text="New Invoice" :isIcon="true" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/sass/variables.scss';
@import '../../assets/sass/mixins.scss';

.invoices-header {
  width: 46rem;
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 2rem;
  align-items: center;

  h1 {
    @include headingLarge;
    color: var(--textColor);
  }

  p {
    @include bodyVariant;
    color: var(--gray);
  }
}
</style>
