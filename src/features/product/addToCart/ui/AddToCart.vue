<script setup lang="ts">
import IconCart from '~/shared/components/icons/IconCart.vue'
import type { IProduct } from '~/entities/product'
import { useCartStore } from '~/entities/cart'

const props = defineProps<{
  id: IProduct['id']
}>()

/* INIT */
const cartStore = useCartStore()

/* COMPUTED */
const isInCart = computed(() => {
  return cartStore.items.find(i => i.productId === props.id)
})

/* METHODS */
function onToggle() {
  if (isInCart.value) {
    cartStore.onRemoveProduct(props.id)
  }
  else {
    cartStore.onAddProduct(props.id)
  }
}
</script>

<template>
  <ElButton
    circle
    :class="{ active: isInCart }"
    @click="onToggle"
  >
    <IconCart style="width: 16px;" />
  </ElButton>
</template>

<style scoped lang="scss">
// TODO
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
