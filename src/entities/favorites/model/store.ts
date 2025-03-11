import type { IProduct } from '~/entities/product'

export const useFavoritesStore = defineStore('favoritesStore', () => {
  const list = useCookie<IProduct['id'][]>('favorites', {
    default: () => [], // Значение по умолчанию
    maxAge: 3600 * 24 * 3, // Время жизни cookie в секундах (1 час)
    secure: true, // Только для HTTPS
    sameSite: 'strict', // Политика безопасности
  })

  return {
    list,
  }
})
