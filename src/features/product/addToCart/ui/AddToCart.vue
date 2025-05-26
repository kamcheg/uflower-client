<script setup lang="ts">
import IconCart from '~/shared/components/icons/IconCart.vue'
import type { IProduct } from '~/entities/product'
import {useCart} from "~/features/product/addToCart/model/useCart";

const props = defineProps<{
  id: IProduct['id']
}>()

const {
  isInCart,
  onToggleCart
} = useCart(props.id)
</script>

<template>
  <ElButton
    circle
    :class="{ active: isInCart }"
    @click="onToggleCart"
  >
    <IconCart style="width: 16px;" />
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
