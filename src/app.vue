<script lang="ts" setup>
// import {useSizesStore} from "~/shared/stores/useSizesStore";
// import {useRecipientsStore} from "~/shared/stores/useRecipientsStore";
// import {useReasonsStore} from "~/shared/stores/useReasonsStore";
// import {useFlowerTypesStore} from "~/shared/stores/useFlowerTypesStore";
//
// const sizesStore = useSizesStore()
// const recipientsStore = useRecipientsStore()
// const reasonsStore = useReasonsStore()
// const flowerTypesStore = useFlowerTypesStore()
//
// onServerPrefetch(async () => {
//   await sizesStore.fetch()
//   await recipientsStore.fetch()
//   await reasonsStore.fetch()
//   await flowerTypesStore.fetch()
// })

import {fetchAbout, type IResponse} from "~/shared/api/fetchAbout";

const { data, error } = await useAsyncData<IResponse>(
  'about',
  () => fetchAbout(),
)
</script>

<template>
  <div></div>
</template>

<style lang="scss">
</style>
