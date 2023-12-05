<script lang="ts" setup>
import BackButton from '@/components/BackButton.vue'
import InvoiceDetails from '@/components/invoice/InvoiceDetails.vue'
import InvoiceHeader from '@/components/invoice/InvoiceHeader.vue'
import { useInvoiceStore } from '@/stores/invoice'
import { useRoute } from 'vue-router'

const route = useRoute()
const invoiceStore = useInvoiceStore()
const { invoices } = invoiceStore

const id = route.params.id
const invoice = invoices.find((invoice) => invoice.id === id)
</script>

<template>
  <div class="invoice-page">
    <BackButton />
    <InvoiceHeader :status="invoice?.status" />
    <InvoiceDetails :invoice="invoice" />
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';
@import '../assets/sass/mixins.scss';

.invoice-page {
  width: 46rem;
  padding-top: 4rem;
  margin-inline: auto;
}
</style>
