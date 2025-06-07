import { defineStore } from 'pinia'
import axios from "axios";
import type {IRecipient} from "~/shared/types/common";

type TDto = {
  id: number
  title: string
  flowersLength: number
}

export const useRecipientsStore = defineStore('recipients', () => {
  const recipients = ref<IRecipient[]>([])

  async function fetch() {
    try {
      const res = await axios.get<TDto[]>('recipients')
      recipients.value = res.data.map((i): IRecipient => ({
        id: i.id,
        name: i.title,
        quantity: i.flowersLength,
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
