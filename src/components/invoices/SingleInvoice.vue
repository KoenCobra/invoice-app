<script lang="ts" setup>
import { useInvoiceStore } from '@/stores/invoice'
import Status from '../Status.vue'
import { formatDueDate } from '@/utils/date'

const invoiceStore = useInvoiceStore()
const { invoices } = invoiceStore
</script>

<template>
  <div
    @click="$router.push(`/invoices/${invoice.id}`)"
    class="invoice"
    v-for="invoice in invoices"
    :key="invoice.id"
  >
    <div class="id"><span>#</span>{{ invoice.id }}</div>
    <div class="date">{{ formatDueDate(invoice.createdAt) }}</div>
    <div class="name">{{ invoice.clientName }}</div>
    <div class="amount">£ {{ invoice.total.toLocaleString('en-EN') }}</div>
    <Status :status="invoice.status" />
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
    color: var(--textColor);

    span {
      color: var(--grayishBlue);
    }
  }
  .date {
    @include body;
    color: var(--grayishBlue);
  }

  .name {
    @include body;
    color: var(--grayishBlue);
  }

  .amount {
    justify-self: end;
    color: var(--textColor);
    @include headingSmall;
  }
}
</style>
