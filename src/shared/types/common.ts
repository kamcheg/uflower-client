export interface IPaginatedData<T> {
  pagination: {
    lastPage: number // Максимальное кол-во страниц
    perPage: number // Максимальное количество элементов которые будут находиться в data
    page: number // Текущая страница
    total: number // Общее количество элементов
  }
  data: T[]
}

export interface IPrice {
  min: number | null
  max: number | null
}

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
