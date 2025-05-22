import {useFavoritesStore} from "~/entities/favorites";

export function useFavorite(id: number) {
  /* INIT */
  const favoritesStore = useFavoritesStore()

  /* COMPUTED */
  const isInFavorite = computed(() => {
    return favoritesStore.list.includes(id)
  })

  /* METHODS */
  function onToggleFavorite() {
    if (isInFavorite.value) {
      favoritesStore.list = favoritesStore.list.filter(x => x !== id)
    }
    else {
      favoritesStore.list.push(id)
    }
  }

  return {
    isInFavorite,
    onToggleFavorite
  }
}
