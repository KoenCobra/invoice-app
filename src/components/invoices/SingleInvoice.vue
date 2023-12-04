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
    <div class="id"><span>#</span>{{ invoice.id }}</div>
    <div class="date">{{ formatDueDate(invoice.createdAt) }}</div>
    <div class="name">{{ invoice.clientName }}</div>
    <div class="amount">£ {{ invoice.total.toLocaleString('en-EN') }}</div>
    <div class="status" :class="invoice.status">
      <span>
        <div class="dot"></div>
        {{ invoice.status }}</span
      >
    </div>
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

  .status {
    justify-self: center;
    @include headingSmall;
    border-radius: 6px;
    width: 104px;
    height: 40px;
    display: grid;
    place-items: center;
    text-transform: capitalize;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .dot {
      border-radius: 50%;
      width: 8px;
      height: 8px;
    }

    &.paid {
      background-color: rgba(#33d69f, 0.06);
      span {
        color: var(--paid);

        .dot {
          background-color: var(--paid);
        }
      }
    }

    &.pending {
      background-color: rgba(#ff8f00, 0.06);
      span {
        color: var(--pending);

        .dot {
          background-color: var(--pending);
        }
      }
    }

    &.draft {
      background-color: var(--draftBackground);
      span {
        color: var(--draft);

        .dot {
          background-color: var(--draft);
        }
      }
    }
  }
}
</style>
