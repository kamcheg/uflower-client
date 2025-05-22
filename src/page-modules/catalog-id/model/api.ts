import axios from "axios";

interface IGetOneDto {
  id: number
  height: number
  width: number
  price: number
  name: string
  description: string
  images: string[]
  size: { id: number, title: string }
  ingredients: { value: string, quantity: number }[]
  inStock: boolean
}

export interface IProductDetail {
  id: number
  height: number
  width: number
  price: number
  name: string
  description: string
  images: string[]
  sizeName: string
  ingredients: { value: string, quantity: number }[]
  inStock: boolean
}

export async function fetchOneProduct(id: string): Promise<IProductDetail> {
  const { data } = await axios.get<IGetOneDto>('/flowers/' + id)

  return {
    id: data.id,
    height: data.height,
    width: data.width,
    price: data.price,
    name: data.name,
    description: data.description,
    images: data.images,
    sizeName: data.size?.title,
    ingredients: data.ingredients,
    inStock: data.inStock,
  }
}
