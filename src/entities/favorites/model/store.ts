import { useLocalStorage } from '@vueuse/core'
import type { IProduct } from '~/entities/product'

export const useFavoritesStore = defineStore('favoritesStore', () => {
  const list = useLocalStorage<IProduct['id'][]>('favorites', [])

  return {
    list,
  }
})
