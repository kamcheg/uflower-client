export interface IProductListDto {
  total: number
  items: {
    id: number
    name: string
    price: number
    images: {
      url: string
    }[]
  }[]
}
