import { defineStore } from 'pinia'
import type {IReason} from "~/shared/types/common";
import axios from "axios";

type TDto = {
  id: number
  title: string
  flowersLength: number
}

export const useReasonsStore = defineStore('reasons', () => {
  const reasons = ref<IReason[]>([])

  async function fetch() {
    try {
      const res = await axios.get<TDto[]>('reasons')
      reasons.value = res.data.map((i): IReason => ({
        id: i.id,
        name: i.title,
        quantity: i.flowersLength,
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
