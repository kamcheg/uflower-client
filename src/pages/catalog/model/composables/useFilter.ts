import type { IPrice } from '../'
import type { IFlowerType, IReason, IRecipient, ISize } from '~/shared/types'

export function useFilter() {
  const price = ref<IPrice>({
    min: null,
    max: null,
  })
  const composition = ref<IFlowerType['id'][]>([])
  const reasons = ref<IReason['id'][]>([])
  const recipients = ref<IRecipient['id'][]>([])
  const sizes = ref<ISize['id'][]>([])

  return {
    composition,
    price,
    reasons,
    recipients,
    sizes,
  }
}
