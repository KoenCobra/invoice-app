<script lang="ts" setup>
import { useInvoiceStore } from '@/stores/invoice'

const invoiceStore = useInvoiceStore()
const { invoices } = invoiceStore

const formatDueDate = (dateString: string) => {
  const date = new Date(dateString)
  const options = { month: 'short', day: 'numeric', year: 'numeric' }
  let formattedDate = date.toLocaleDateString('en-US', options as any)

  const [month, day, year] = formattedDate.split(' ')
  return `Due ${day.padStart(2, '0')} ${month} ${year}`
}
</script>

<template>
  <div class="invoice" v-for="invoice in invoices" :key="invoice.id">
    <div class="id">#{{ invoice.id }}</div>
    <div class="date">{{ formatDueDate(invoice.createdAt) }}</div>
    <div class="name">{{ invoice.clientName }}</div>
    <div class="amount">£ {{ invoice.total.toLocaleString('en-EN') }}</div>
    <div class="status">{{ invoice.status }}</div>
    <img src="/assets/icon-arrow-right.svg" alt="right-arrow" />
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/sass/variables.scss';
@import '../../assets/sass/mixins.scss';

.invoice {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr auto;
  padding: 1rem 2rem;
  align-items: center;
  gap: 1rem;
  background-color: var(--background);
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  cursor: pointer;

  .id {
    @include headingSmall;
    color: var(--black);
  }
  .date {
    @include body;
    color: var(--grayishBlue);
  }
  .amount {
    justify-self: end;
  }
  .status {
    justify-self: center;
  }
}
</style>
