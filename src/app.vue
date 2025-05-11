<script lang="ts" setup>
import {useSizesStore} from "~/shared/stores/useSizesStore";
import {useRecipientsStore} from "~/shared/stores/useRecipientsStore";

const sizesStore = useSizesStore()
const recipientsStore = useRecipientsStore()

onServerPrefetch(async () => {
  await sizesStore.fetch()
  await recipientsStore.fetch()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import 'element-plus/dist/index.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

html {
  //background: #f5f5f5;
  font-family: "Montserrat", serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
