<script setup lang="ts">
import type { IProduct } from '~/entities/product'
import { useFavoritesStore } from '~/entities/favorites'
import IconFavorite from '~/shared/components/icons/IconFavorite.vue'
import {useFavorite} from "~/features/product/addToFavorites/model/useFavorite";

const props = defineProps<{
  id: IProduct['id']
}>()

const {
  isInFavorite,
  onToggleFavorite
} = useFavorite(props.id)
</script>

<template>
  <ElButton
    circle
    :class="{ active: isInFavorite }"
    @click="onToggleFavorite"
  >
    <IconFavorite style="width: 16px;" />
  </ElButton>
</template>

<style scoped lang="scss">
.active {
  color: #fff;
  background: rgb(255, 134, 116);
  border-color: rgb(255, 134, 116);

  &:hover {
    color: #fff;
    background: rgb(255, 180, 169);
    border-color: rgb(255, 180, 169);
  }
}
</style>
