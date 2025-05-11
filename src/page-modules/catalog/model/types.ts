import type { IPrice, IFlowerType, IReason, IRecipient, ISize } from '@/shared/types/common'

export interface IFilters {
  composition: IFlowerType['id'][]
  price: IPrice
  reasons: IReason['id'][]
  recipients: IRecipient['id'][]
  sizes: ISize['id'][]
}
