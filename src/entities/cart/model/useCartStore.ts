import { defineStore } from 'pinia'
import type { ICartItem, ICartProduct } from '~/entities/cart/model/types'
import type { IProduct } from '~/entities/product'
import { products as mockProducts } from '~/mock'

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
          ...item,
        }
      })
      .filter(i => !!i)
  })

  const totalPrice = computed(() => {
    return products.value.reduce((acc, item) => {
      return acc + item.quantity * item.price
    }, 0)
  })

  const productsCounter = computed(() => {
    return items.value.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
  })

  /* METHODS */
  async function onAddProduct(id: ICartItem['productId']) {
    items.value.push({
      productId: id,
      quantity: 1,
      note: '',
      isNeedNote: false,
    })

    await fetchProduct(id)
  }

  function onRemoveProduct(id: ICartItem['productId']) {
    items.value = items.value.filter(i => i.productId !== id)
  }

  function changeQuantity(id: ICartItem['productId'], quantity: number) {
    const current = items.value.find(i => i.productId === id)
    if (current) {
      current.quantity = quantity
    }
  }

  function onChangeNote(id: ICartItem['productId'], value: ICartItem['note']) {
    const current = items.value.find(i => i.productId === id)
    if (current) {
      current.note = value
    }
  }

  function onChangeNoteStatus(id: ICartItem['productId'], flag: boolean) {
    const current = items.value.find(i => i.productId === id)
    if (!current) {
      return
    }

    current.isNeedNote = flag

    if (!flag) {
      current.note = ''
    }
  }

  async function fetchCartProducts() {
    if (!items.value.length) {
      return
    }

    try {
      localProducts.value = items.value
        .map(i => mockProducts.find(mockProduct => mockProduct.id === i.productId))
        .filter(i => !!i)
    }
    catch (e) {
      console.log(e)
    }
  }

  async function fetchProduct(id: IProduct['id']) {
    try {
      const pr = mockProducts.find(mockProduct => mockProduct.id === id)
      if (!pr) return

      localProducts.value.push(pr)
    }
    catch (e) {
      console.log(e)
    }
  }

  return {
    items,

    products,
    totalPrice,
    productsCounter,

    fetchCartProducts,
    onAddProduct,
    onRemoveProduct,
    changeQuantity,
    onChangeNote,
    onChangeNoteStatus,
  }
})
