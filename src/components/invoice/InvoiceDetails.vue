<script lang="ts" setup>
import { formatDueDate } from '@/utils/date'
import ItemTable from './ItemTable.vue'

const props = defineProps({
  invoice: Object
})
</script>

<template>
  <div v-if="invoice" class="invoice-details">
    <div class="address">
      <div>
        <p class="id"><span>#</span>{{ invoice.id }}</p>
        <p>{{ invoice.description }}</p>
      </div>
      <div>
        <p>{{ invoice.senderAddress.street }}</p>
        <p>{{ invoice.senderAddress.city }}</p>
        <p>{{ invoice.senderAddress.postCode }}</p>
        <p>{{ invoice.senderAddress.country }}</p>
      </div>
    </div>
    <div class="payment">
      <div class="date">
        <div>
          <p>Invoice Date</p>
          <span>{{ formatDueDate(invoice.createdAt) }}</span>
        </div>
        <div>
          <p>Payment Due</p>
          <span>{{ formatDueDate(invoice.paymentDue) }}</span>
        </div>
      </div>
      <div class="bill-to">
        <p>Bill To</p>
        <p class="name">{{ invoice.clientName }}</p>
        <p>{{ invoice.clientAddress.street }}</p>
        <p>{{ invoice.clientAddress.city }}</p>
        <p>{{ invoice.clientAddress.postCode }}</p>
        <p>{{ invoice.clientAddress.country }}</p>
      </div>
      <div class="sent-to">
        <p>Sent To</p>
        <span>{{ invoice.clientEmail }}</span>
      </div>
    </div>
    <ItemTable v-if="invoice" :invoice="invoice" />
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/sass/variables.scss';
@import '../../assets/sass/mixins.scss';

.invoice-details {
  border-radius: 8px;
  background-color: var(--background);
  padding: 2rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);

  p {
    @include body;
    color: var(--grayishBlue);
  }

  span {
    color: var(--textColor);
    @include headingSmall;
  }
  .address {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    .id {
      @include headingSmall;
      color: var(--textColor);
      span {
        color: var(--grayishBlue);
      }
    }
  }

  .payment {
    display: flex;
    gap: 7rem;

    .date {
      display: grid;
      gap: 2rem;

      & > div {
        display: grid;
        gap: 0.5rem;
      }
    }
  }

  .bill-to {
    .name {
      color: var(--textColor);
      @include headingSmall;
      padding-block: 0.5rem;
    }
  }

  .sent-to p {
    padding-bottom: 0.4rem;
  }
}
</style>
