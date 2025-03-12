import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loadingStore', () => {
  const isLoading = ref(false)

  return {
    isLoading,
  }
})
