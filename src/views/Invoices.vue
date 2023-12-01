<script lang="ts" setup>
import SingleInvoice from '@/components/invoices/SingleInvoice.vue'
import InvoicesHeader from '../components/invoices/InvoicesHeader.vue'
</script>

<template>
  <div class="invoices">
    <InvoicesHeader />
    <div class="invoices-list">
      <SingleInvoice />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.invoices {
  width: 46rem;
  padding-top: 4.8rem;
  margin-inline: auto;

  .invoices-list {
    display: grid;
    gap: 1rem;
  }
}
</style>
