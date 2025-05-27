import { defineStore } from 'pinia'
import type {IFlowerType} from "~/shared/types/common";
import axios from "axios";

type TDto = {
  id: number
  title: string
  flowersLength: number
}

export const useFlowerTypesStore = defineStore('flowerTypes', () => {
  const flowerTypes = ref<IFlowerType[]>([])

  async function fetch() {
    try {
      const res = await axios.get<TDto[]>('flower-types')
      flowerTypes.value = res.data.map((i): IFlowerType => ({
        id: i.id,
        name: i.title,
        quantity: i.flowersLength
      }))
    } catch {
      console.log('Не удалось загрузить сорта цветов!')
    }
  }

  return {
    flowerTypes,
    fetch
  }
})
