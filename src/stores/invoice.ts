import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import type { Invoice } from '@/types/invoice'
export const useInvoiceStore = defineStore('invoice', () => {
  const invoices = ref<Invoice[]>([])

  const getInvoices = async () => {
    invoices.value = await axios.get('/data.json')
  }

  return {
    invoices,
    getInvoices
  }
})
