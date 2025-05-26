import type { IProduct } from '~/entities/product'

export interface ICartItem {
  productId: IProduct['id']
  quantity: number
  note: string
  isNeedNote: boolean
}

export interface ICartProduct extends IProduct {
  quantity: ICartItem['quantity']
  note: ICartItem['note']
  isNeedNote: ICartItem['isNeedNote']
}
