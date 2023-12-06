<script lang="ts" setup>
import { useInvoiceStore } from '@/stores/invoice'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const invoiceStore = useInvoiceStore()
const { isCreateEditVisible } = storeToRefs(invoiceStore)
const router = useRouter()

const logoClick = () => {
  isCreateEditVisible.value = false
  router.push('/')
}
</script>

<template>
  <div @click="logoClick" class="logo">
    <img class="logo-img" src="/assets/logo.svg" alt="logo" />
    <img class="logo-back" src="/assets/logo-background.svg" alt="logo-back" />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 103px;
  cursor: pointer;

  .logo-img {
    grid-column: 1;
    grid-row: 1;
    z-index: 1;
    width: 40px;
    height: 37.708px;
  }

  .logo-back {
    grid-column: 1;
    grid-row: 1;
  }
}
</style>
