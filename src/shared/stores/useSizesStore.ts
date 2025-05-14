import { defineStore } from 'pinia'
import type {ISize} from "~/shared/types/common";
import axios from "axios";

type TDto = {
  id: number
  title: string
  image: string
}

export const useSizesStore = defineStore('sizes', () => {
  const sizes = ref<ISize[]>([])

  async function fetch() {
    try {
      const res = await axios.get<TDto[]>('sizes')
      sizes.value = res.data.map((i) => ({
        id: i.id,
        name: i.title,
        image: i.image
      }))
    } catch {
      console.log('Не удалось загрузить размеры!')
    }
  }

  return {
    sizes,
    fetch
  }
})
