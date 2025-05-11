import { defineStore } from 'pinia'
import type {ISize} from "~/shared/types/common";
import {apiInstance} from "~/shared/lib/axios";

type TDto = {
  id: number
  title: string
  image: string
}

export const useSizesStore = defineStore('sizes', () => {
  const sizes = ref<ISize[]>([])

  async function fetch() {
    const res = await apiInstance.get<TDto[]>('sizes')
    sizes.value = res.data.map((i) => ({
      id: i.id,
      name: i.title,
      image: i.image
    }))
  }

  return {
    sizes,
    fetch
  }
})
