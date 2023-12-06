<script lang="ts" setup>
import { useInvoiceStore } from '@/stores/invoice'
import type { Invoice } from '@/types/invoice'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
const invoiceStore = useInvoiceStore()
const { invoice } = storeToRefs(invoiceStore)

const toHome = () => {
  invoice.value = null
  router.push('/')
}
</script>

<template>
  <button @click="toHome">
    <div class="back-btn">
      <img src="/assets/icon-arrow-left.svg" alt="back" />
      <p>Go Back</p>
    </div>
  </button>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';
@import '../assets/sass/mixins.scss';

.back-btn {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: var(--textColor);
  p {
    @include headingSmall;
  }
}
</style>
