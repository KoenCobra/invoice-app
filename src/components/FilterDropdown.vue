<script lang="ts" setup>
import { useInvoiceStore } from '@/stores/invoice'
import { storeToRefs } from 'pinia'
import Checkbox from 'primevue/checkbox'
import { onMounted, onUnmounted, ref } from 'vue'

const isDropdownVisible = ref(false)
const dropdownToggleBtn = ref()
const dropdown = ref()
const invoiceStore = useInvoiceStore()
const { status } = storeToRefs(invoiceStore)

const handleClickOutside = (event: any) => {
  if (
    dropdown.value.contains(event.target) ||
    event.target.tagName === 'svg' ||
    event.target.tagName === 'path'
  ) {
    isDropdownVisible.value = true
    return
  }
  if (
    dropdownToggleBtn.value &&
    !dropdownToggleBtn.value.contains(event.target) &&
    isDropdownVisible.value
  ) {
    isDropdownVisible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="filter-drowndown">
    <button @click="isDropdownVisible = !isDropdownVisible" ref="dropdownToggleBtn">
      <p>Filter by status</p>
      <img src="/assets/icon-arrow-down.svg" alt="" />
    </button>

    <div :class="{ show: isDropdownVisible }" ref="dropdown" class="dropdown">
      <div class="dropdown-item" v-for="(item, index) in ['Draft', 'Pending', 'Paid']" :key="index">
        <Checkbox
          v-model="status"
          :id="'status-' + item"
          :name="item"
          :value="item.toLowerCase()"
          @change="invoiceStore.filterInvoices()"
        />
        <label :for="'status-' + item">{{ item }}</label>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';
@import '../assets/sass/mixins.scss';

.filter-drowndown {
  position: relative;
  button {
    p {
      @include headingSmall;
      color: var(--textColor);
    }
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .dropdown {
    width: 192px;
    position: absolute;
    top: 3rem;
    left: -2rem;
    padding: 1.5rem;
    border-radius: 8px;
    background: var(--background);
    box-shadow: 0px 10px 20px 0px rgba(72, 84, 159, 0.25);
    display: grid;
    gap: 0.5rem;
    transform: scale(0);
    transition: all 0.2s ease-in;
    transform-origin: top;

    &.show {
      transform: scale(1);
    }

    .dropdown-item {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: var(--textColor);

      label {
        @include headingSmall;
      }
    }
  }
}
</style>
