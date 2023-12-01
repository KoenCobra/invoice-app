<script lang="ts" setup>
import SingleInvoice from '@/components/invoices/SingleInvoice.vue'
import InvoicesHeader from '../components/invoices/InvoicesHeader.vue'
</script>

<template>
  <div class="invoices">
    <InvoicesHeader />
    <SingleInvoice />
  </div>
</template>

<style lang="scss" scoped>
.invoices {
  display: grid;
  justify-items: center;
  align-items: center;
  padding-top: 4.8rem;
}
</style>
