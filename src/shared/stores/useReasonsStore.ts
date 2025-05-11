import { defineStore } from 'pinia'
import type {IReason} from "~/shared/types/common";
import {apiInstance} from "~/shared/lib/axios";

type TDto = {
  id: number
  title: string
  image: string
}

export const useReasonsStore = defineStore('reasons', () => {
  const reasons = ref<IReason[]>([])

  async function fetch() {
    try {
      const res = await apiInstance.get<TDto[]>('reasons')
      reasons.value = res.data.map((i) => ({
        id: i.id,
        name: i.title,
        image: i.image
      }))
    } catch {
      console.log('Не удалось загрузить размеры!')
    }
  }

  return {
    reasons,
    fetch
  }
})
