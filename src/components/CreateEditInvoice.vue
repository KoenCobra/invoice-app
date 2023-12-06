<script lang="ts" setup>
import { useInvoiceStore } from '@/stores/invoice'
import { storeToRefs } from 'pinia'

const invoiceStore = useInvoiceStore()

const { isCreateEditVisible, invoice } = storeToRefs(invoiceStore)
</script>

<template>
  <Transition>
    <div @click="isCreateEditVisible = false" v-if="isCreateEditVisible" class="overlay"></div>
  </Transition>
  <div class="create-edit-invoice" :class="{ open: isCreateEditVisible }">
    <h2>{{ invoice ? 'Edit Invoice' : 'New Invoice' }}</h2>
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
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 720px;
  background-color: var(--createBackground);
  z-index: 4;
  padding: 3.5rem;
  padding-left: 9rem;
  overflow: auto;
  transform: translateX(-1500px);
  transition: all 0.3s ease-out;
  border-radius: 0px 20px 20px 0px;

  &.open {
    transform: translateX(0);
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
