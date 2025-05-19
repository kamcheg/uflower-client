<script setup lang="ts">
import axios from 'axios'

interface IItem {
  value: string
}

const model = defineModel<string>({ required: true })

const querySearchAsync = async (query: string, cb: (arg: IItem[]) => void) => {
  const token = '58c32a9a6700723589530251df0175b4cb16a540' // TODO env

  try {
    const res = await axios.post<{suggestions: { value: string }[]}>('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', { query: query }, {
      headers: {
        Authorization: "Token " + token
      }
    })

    const suggestions = res.data.suggestions || []

    const items = suggestions.map((item): IItem => ({
      value: item.value,
    }))
    cb(items)
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <ElAutocomplete
    v-model="model"
    :fetch-suggestions="querySearchAsync as any"
  >
    <template #loading>
      Loading...
    </template>
  </ElAutocomplete>
</template>

<style scoped lang="scss">

</style>
