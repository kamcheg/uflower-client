import { useCartStore } from '~/entities/cart'

export function useCart(id: number) {
  /* INIT */
  const cartStore = useCartStore()

  /* COMPUTED */
  const isInCart = computed(() => {
    return cartStore.items.find(i => i.productId === id)
  })

  /* METHODS */
  function onToggleCart() {
    if (isInCart.value) {
      cartStore.onRemoveProduct(id)
    }
    else {
      cartStore.onAddProduct(id)
    }
  }

  return {
    isInCart,
    onToggleCart
  }
}
