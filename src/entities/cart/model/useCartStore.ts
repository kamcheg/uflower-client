import { defineStore } from 'pinia'
import type { ICartItem, ICartProduct } from '~/entities/cart/model/types'
import type { IProduct } from '~/entities/product'
import type {ProductResponseDto} from "~/shared/dtos/product.dto";
import {transformServerProductToClient} from "~/shared/adapters/product";
import axios from "axios";
import Decimal from 'decimal.js'

export const useCartStore = defineStore('cartStore', () => {
  /* DATA */
  const items = useCookie<ICartItem[]>('cart', {
    default: () => [], // Значение по умолчанию
    maxAge: 3600 * 24 * 3, // Время жизни cookie в секундах (1 час)
    secure: true, // Только для HTTPS
    sameSite: 'strict', // Политика безопасности
  })
  const _localProducts = ref<IProduct[]>([])

  /* COMPUTED */
  const products = computed<ICartProduct[]>((): ICartProduct[] => {
    return items.value
      .map((item) => {
        const currentProduct = _localProducts.value.find(lp => lp.id === item.productId)

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
      return acc.plus(new Decimal(item.quantity).times(item.price))
    }, new Decimal(0)).toNumber()
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
      const {data} = await axios.get<ProductResponseDto[]>('/flowers/find-by-ids', {
        params: {
          ids: items.value.map(i => i.productId)
        }
      })

      _localProducts.value = data.map(p => transformServerProductToClient(p))
    }
    catch (e) {
      throw e
    }
  }

  function clear() {
    items.value = []
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
    clear
  }
})
