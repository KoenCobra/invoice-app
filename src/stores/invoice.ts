import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import type { Invoice } from '@/types/invoice'
export const useInvoiceStore = defineStore('invoice', () => {
  const invoices = ref<Invoice[]>([])
  const invoice = ref<Invoice>()
  const isCreateEditVisible = ref(false)
  const status = ref()

  const getInvoices = async () => {
    invoices.value = (await axios.get('/data.json')).data
  }

  const getInvoice = (id: string) => {
    invoice.value = invoices.value.find((invoice) => invoice?.id === id)
  }

  const filterInvoices = async () => {
    await getInvoices()
    if (status.value && status.value.length > 0) {
      invoices.value = invoices.value.filter((invoice) => status.value.includes(invoice?.status))
    }
  }

  return {
    invoices,
    invoice,
    isCreateEditVisible,
    status,
    getInvoice,
    getInvoices,
    filterInvoices
  }
})
