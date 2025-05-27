export interface ProductResponseDto {
  id: number
  createdAt: string
  updatedAt: string
  name: string
  description: string
  inStock: boolean
  price: number
  isActive: boolean
  width: number
  height: number
  images: string[]
  mainImageIndex: number
  size: {
    id: number
    title: string
    image: string
  },
  reasons: number[]
  recipients: number[]
  flowerTypes: number[]
}
