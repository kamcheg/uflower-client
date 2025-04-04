<script setup lang="ts">
import { toReadableNumber } from '~/shared/lib/utils/toReadableNumber'
import { useCartStore } from '~/entities/cart'

const emit = defineEmits<{
  (name: 'order'): void
}>()

/* INIT */
const cartStore = useCartStore()
</script>

<template>
  <div class="cart-total">
    <div class="price">
      Итого {{ toReadableNumber(cartStore.totalPrice) }} ₽
    </div>
    <ElButton @click="emit('order')">
      Оформить заказ
    </ElButton>
  </div>
</template>

<style scoped lang="scss">
.cart-total {
  padding: 32px;
  box-shadow: 0 6px 20px 6px #3540471a;
  background: #fff;
  border-radius: 16px;
}
</style>
