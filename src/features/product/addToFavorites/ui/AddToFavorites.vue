<script setup lang="ts">
import { StarFilled } from '@element-plus/icons-vue'
import type { IProduct } from '~/entities/product'
import { useFavoritesStore } from '~/entities/favorites'

const props = defineProps<{
  id: IProduct['id']
}>()

/* INIT */
const favoritesStore = useFavoritesStore()

/* COMPUTED */
const isInFavorite = computed(() => {
  return favoritesStore.list.includes(props.id)
})

/* METHODS */
function onToggle() {
  if (isInFavorite.value) {
    favoritesStore.list = favoritesStore.list.filter(id => id !== props.id)
  }
  else {
    favoritesStore.list.push(props.id)
  }
}
</script>

<template>
  <ElButton
    :icon="StarFilled"
    circle
    :class="{ active: isInFavorite }"
    @click="onToggle"
  />
</template>

<style scoped lang="scss">
.active {
  color: #fff;
  background: rgb(255, 134, 116);
  border-color: rgb(255, 134, 116);
}
</style>
