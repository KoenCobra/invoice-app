import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(localStorage.getItem('theme') || '')

  watchEffect(() => {
    applyTheme(theme.value)
  })

  function applyTheme(currentTheme: string) {
    const body = document.querySelector('body')
    if (currentTheme === 'dark') {
      body?.classList.add('dark')
    } else {
      body?.classList.remove('dark')
    }
  }

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? '' : 'dark'
    localStorage.setItem('theme', theme.value)
  }

  return {
    toggleTheme
  }
})
