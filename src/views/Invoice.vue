<script lang="ts" setup>
import BackButton from '@/components/BackButton.vue'
import InvoiceDetails from '@/components/invoice/InvoiceDetails.vue'
import InvoiceHeader from '@/components/invoice/InvoiceHeader.vue'
import { useInvoiceStore } from '@/stores/invoice'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const invoiceStore = useInvoiceStore()
const { invoice } = storeToRefs(invoiceStore)

const id = route.params.id as string

onMounted(() => {
  invoiceStore.getInvoice(id)
})
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
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(150px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
