import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import type { Invoice } from '@/types/invoice'
export const useInvoiceStore = defineStore('invoice', () => {
  const invoices = ref<Invoice[]>([])

  const getInvoices = async () => {
    invoices.value = await (await axios.get('/data.json')).data
  }

  return {
    invoices,
    getInvoices
  }
})
