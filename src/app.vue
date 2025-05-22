<script lang="ts" setup>
import {useSizesStore} from "~/shared/stores/useSizesStore";
import {useRecipientsStore} from "~/shared/stores/useRecipientsStore";
import {useReasonsStore} from "~/shared/stores/useReasonsStore";
import {useFlowerTypesStore} from "~/shared/stores/useFlowerTypesStore";

const sizesStore = useSizesStore()
const recipientsStore = useRecipientsStore()
const reasonsStore = useReasonsStore()
const flowerTypesStore = useFlowerTypesStore()

onServerPrefetch(async () => {
  await sizesStore.fetch()
  await recipientsStore.fetch()
  await reasonsStore.fetch()
  await flowerTypesStore.fetch()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
</style>
