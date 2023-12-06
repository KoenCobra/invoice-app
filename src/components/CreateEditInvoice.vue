<script lang="ts" setup>
import { useInvoiceStore } from '@/stores/invoice'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const invoiceStore = useInvoiceStore()

const { isCreateEditVisible } = storeToRefs(invoiceStore)

const title = computed(() => {
  return route.params.id
})

console.log(title.value)
</script>

<template>
  <div v-if="isCreateEditVisible" class="create-edit-container">
    <div class="overlay"></div>
    <div class="create-edit-invoice">
      <h2>New Invoice</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';
@import '../assets/sass/mixins.scss';

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
}

.create-edit-invoice {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 720px;
  background-color: var(--createBackground);
  z-index: 4;
  padding: 3.5rem;
  overflow: scroll;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px;
    background-color: red;
    transform: translateX(-100px);
  }
}
</style>
