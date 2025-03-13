<script setup lang="ts">
import { useCartStore } from '~/entities/cart'

const cartStore = useCartStore()
</script>

<template>
  <div class="cart-total">
    <div class="price">
      Итого {{ cartStore.totalPrice }} ₽
    </div>
    <ElButton>
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
