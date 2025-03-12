import type { IProduct } from '~/entities/product'

export interface ICartItem {
  productId: IProduct['id']
  quantity: number
}

export interface ICartProduct extends IProduct {
  quantity: number
}
