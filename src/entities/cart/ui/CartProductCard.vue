<script setup lang="ts">
import type { ICartProduct } from '~/entities/cart/model/types'
import { useCartStore } from '~/entities/cart'

const props = defineProps<{
  data: ICartProduct
}>()

/* CART */
const cartStore = useCartStore()

function onUpdateQuantity(e: number | undefined) {
  if (!e) {
    return
  }

  cartStore.changeQuantity(props.data.id, e)
}
</script>

<template>
  <div class="product-card">
    <div class="image-border">
      <img
        :src="data.image"
        alt=""
      >
    </div>

    <div class="info">
      <div class="info__title">
        {{ data.name }} - {{ data.quantity }}
      </div>

      <ElInputNumber
        :model-value="data.quantity"
        :min="1"
        :max="15"
        @update:model-value="onUpdateQuantity"
      />
    </div>

    <div class="total">
      12 200 ₽
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-card {
  padding: 32px;
  box-shadow: 0 6px 20px 6px #3540471a;
  background: #fff;
  border-radius: 16px;
  display: flex;

  .image-border {
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 8px;

    img {
      display: block;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  .info {
    margin-left: 24px;

    &__title {
      font-weight: 500;
      margin-bottom: 24px;
    }
  }

  .total {
    margin-left: auto;
    width: 100px;
    flex-shrink: 0;
    text-align: right;
  }
}
</style>
