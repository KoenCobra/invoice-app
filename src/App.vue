<script lang="ts" setup>
import { onMounted } from 'vue'
import Sidebar from './components/sidebar/Sidebar.vue'
import { useInvoiceStore } from './stores/invoice'
import CreateEditInvoice from './components/CreateEditInvoice.vue'

const invoiceStore = useInvoiceStore()

onMounted(async () => {
  await invoiceStore.getInvoices()
})
</script>

<template>
  <main>
    <Sidebar />
    <div class="page">
      <RouterView />
      <CreateEditInvoice />
    </div>
  </main>
</template>
<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: auto 1fr;

  .page {
    height: 100vh;
    height: 100svh;
    overflow-y: auto;
    padding-bottom: 4rem;
  }
}
</style>
