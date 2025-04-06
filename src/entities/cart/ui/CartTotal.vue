<script setup lang="ts">
import { toReadableNumber } from '~/shared/lib/utils/toReadableNumber'
import { useCartStore } from '~/entities/cart'

const emit = defineEmits<{
  (name: 'order'): void
}>()

/* INIT */
const cartStore = useCartStore()
const deliveryPrice = ref(300)
</script>

<template>
  <div class="cart-total">
    <div class="price">
      <div class="price__key">
        Сумма:
      </div>
      <div class="price__val">
        {{ toReadableNumber(cartStore.totalPrice) }} ₽
      </div>
    </div>

    <div class="price">
      <div class="price__key">
        Доставка:
      </div>
      <div class="price__val">
        {{ toReadableNumber(deliveryPrice) }} ₽
      </div>
    </div>

    <div class="price price_total">
      <div class="price__key">
        Итого:
      </div>
      <div class="price__val">
        {{ toReadableNumber(cartStore.totalPrice + deliveryPrice) }} ₽
      </div>
    </div>

    <div class="cart-total__btn-container">
      <ElButton @click="emit('order')">
        Оформить заказ
      </ElButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-total {
  padding: 32px;
  box-shadow: 0 6px 20px 6px #3540471a;
  background: #fff;
  border-radius: 16px;

  &__btn-container {
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
  }

  .price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 14px;

    &_total {
      font-size: 20px;
      font-weight: 600;
    }

    &__key {
      width: 50%;
      flex-shrink: 0;
    }

    &__val {
      width: 50%;
      flex-shrink: 0;
      text-align: right;
    }
  }
}
</style>
