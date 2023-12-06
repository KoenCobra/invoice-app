<script lang="ts" setup>
import { useInvoiceStore } from '@/stores/invoice'
import AppButton from '../AppButton.vue'
import FilterDropdown from '../FilterDropdown.vue'
import { storeToRefs } from 'pinia'

const invoiceStore = useInvoiceStore()
const { invoices, isCreateEditVisible } = storeToRefs(invoiceStore)
</script>

<template>
  <div class="invoices-header">
    <div class="title">
      <h1>Invoices</h1>
      <p>There are {{ invoices.length }} total invoices</p>
    </div>
    <div class="filter-dropdown">
      <FilterDropdown />
    </div>
    <AppButton
      @click="isCreateEditVisible = true"
      cssClass="primary"
      text="New Invoice"
      :isIcon="true"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/sass/variables.scss';
@import '../../assets/sass/mixins.scss';

.invoices-header {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 2rem;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;

  h1 {
    @include headingLarge;
    color: var(--textColor);
  }

  p {
    @include body;
    color: var(--gray);
  }
}
</style>
