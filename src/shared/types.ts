export interface IPaginatedData<T> {
  pagination: {
    lastPage: number // Максимальное кол-во страниц
    perPage: number // Максимальное количество элементов которые будут находиться в data
    page: number // Текущая страница
    total: number // Общее количество элементов
  }
  data: T[]
}
