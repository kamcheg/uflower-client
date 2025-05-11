import { defineStore } from 'pinia'
import {apiInstance} from "~/shared/lib/axios";
import type {IRecipient} from "~/shared/types/common";

type TDto = {
  id: number
  title: string
}

export const useRecipientsStore = defineStore('recipients', () => {
  const recipients = ref<IRecipient[]>([])

  async function fetch() {
    try {
      const res = await apiInstance.get<TDto[]>('recipients')
      recipients.value = res.data.map((i) => ({
        id: i.id,
        name: i.title,
      }))
    } catch {
      console.log('Не удалось загрузить размеры!')
    }
  }

  return {
    recipients,
    fetch
  }
})
