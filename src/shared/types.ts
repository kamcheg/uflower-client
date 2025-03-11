export interface IFlowerType {
  id: number
  name: string
}

export interface IReason {
  id: number
  name: string
}

export interface IRecipient {
  id: number
  name: string
}

export interface ISize {
  id: number
  name: string
  image: string
}

export interface IPrice {
  min: number | null
  max: number | null
}
