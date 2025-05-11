import { defineStore } from 'pinia'
import type {IFlowerType} from "~/shared/types/common";
import {apiInstance} from "~/shared/lib/axios";

type TDto = {
  id: number
  title: string
}

export const useFlowerTypesStore = defineStore('flowerTypes', () => {
  const flowerTypes = ref<IFlowerType[]>([])

  async function fetch() {
    try {
      const res = await apiInstance.get<TDto[]>('flower-types')
      flowerTypes.value = res.data.map((i): IFlowerType => ({
        id: i.id,
        name: i.title,
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
