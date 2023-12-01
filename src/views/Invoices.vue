<script lang="ts" setup>
import InvoicesHeader from '../components/invoices/InvoicesHeader.vue'
</script>

<template>
  <div class="invoices">
    <InvoicesHeader />
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
