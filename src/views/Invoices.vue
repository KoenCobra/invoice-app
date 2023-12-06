<script lang="ts" setup>
import SingleInvoice from '@/components/invoices/SingleInvoice.vue'
import InvoicesHeader from '../components/invoices/InvoicesHeader.vue'
import { useInvoiceStore } from '@/stores/invoice'
import { storeToRefs } from 'pinia'

const invoiceStore = useInvoiceStore()
const { invoices } = storeToRefs(invoiceStore)
</script>

<template>
  <div class="invoices">
    <InvoicesHeader />
    <div class="invoices-list">
      <div v-if="!invoices.length" class="empty">
        <img src="/assets/illustration-empty.svg" alt="empty" />
        <h2>There is nothing here</h2>
        <p>
          Create an invoice by clicking the <br />
          <span>New Invoice </span>button
        </p>
      </div>
      <SingleInvoice v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';
@import '../assets/sass/mixins.scss';
.invoices {
  width: 46rem;
  padding-top: 4.8rem;
  margin-inline: auto;

  .invoices-list {
    display: grid;
    gap: 1rem;

    .empty {
      display: grid;
      place-items: center;
      text-align: center;
      color: var(--textColor);

      img {
        margin-block: 2rem;
      }

      h2 {
        margin-bottom: 1rem;
        @include headingMedium;
      }

      p {
        @include body;

        span {
          font-weight: 700;
        }
      }
    }
  }
}
</style>
