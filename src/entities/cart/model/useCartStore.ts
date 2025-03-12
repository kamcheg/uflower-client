import { defineStore } from 'pinia'
import axios from 'axios'
import type { ICartItem, ICartProduct } from '~/entities/cart/model/types'
import type { IProduct } from '~/entities/product'

export const useCartStore = defineStore('cartStore', () => {
  /* DATA */
  const items = useCookie<ICartItem[]>('cart', {
    default: () => [], // Значение по умолчанию
    maxAge: 3600 * 24 * 3, // Время жизни cookie в секундах (1 час)
    secure: true, // Только для HTTPS
    sameSite: 'strict', // Политика безопасности
  })
  const localProducts = ref<IProduct[]>([])

  /* COMPUTED */
  const products = computed<ICartProduct[]>((): ICartProduct[] => {
    return items.value
      .map((item) => {
        const currentProduct = localProducts.value.find(lp => lp.id === item.productId)

        if (!currentProduct) {
          return null
        }

        return {
          ...currentProduct,
          quantity: 11,
        }
      })
      .filter(i => !!i)
  })

  /* METHODS */
  async function onAddProduct(id: ICartItem['productId']) {
    items.value.push({
      productId: id,
      quantity: 1,
    })

    fetchProduct(id)
  }

  function onRemoveProduct(id: ICartItem['productId']) {
    items.value = items.value.filter(i => i.productId !== id)
  }

  function onIncrement(id: ICartItem['productId']) {
    const current = items.value.find(i => i.productId === id)
    if (current) {
      current.quantity++
    }
  }

  function onDecrement(id: ICartItem['productId']) {
    const current = items.value.find(i => i.productId === id)
    if (current) {
      current.quantity--
    }
  }

  async function fetchCartProducts() {
    if (!items.value.length) {
      return
    }

    try {
      localProducts.value = await axios.get<IProduct[]>('http://localhost:4000/products', {
        params: {
          id: items.value.map(i => i.productId),
        },
      })
        .then(r => r.data)
    }
    catch (e) {
      console.log(e)
    }
  }

  async function fetchProduct(id: IProduct['id']) {
    try {
      const pr = await axios.get<IProduct>('http://localhost:4000/products/' + id)
        .then(r => r.data)
      localProducts.value.push(pr)
    }
    catch (e) {
      console.log(e)
    }
  }

  return {
    items,
    products,

    fetchCartProducts,
    onAddProduct,
    onRemoveProduct,
    onIncrement,
    onDecrement,
  }
})
