<script setup lang="ts">
import { toReadableNumber } from '~/shared/lib/utils/toReadableNumber'
import type { ICartProduct } from '~/entities/cart/model/types'
import { useCartStore } from '~/entities/cart'
import CartDelete from '~/entities/cart/ui/CartDelete.vue'

const props = defineProps<{
  data: ICartProduct
}>()

/* INIT */
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
    <div class="product-card__main">
      <div class="image-border">
        <img
          :src="data.image"
          alt=""
        >
      </div>

      <div class="info">
        <div class="info__title">
          {{ data.name }}
        </div>

        <ElInputNumber
          :model-value="data.quantity"
          :min="1"
          :max="15"
          @update:model-value="onUpdateQuantity"
        />
      </div>

      <div class="right">
        <div class="right__price">
          <div class="total">
            {{ toReadableNumber(data.price * data.quantity) }} ₽
          </div>
          <div class="detail">
            {{ data.quantity }} x {{ toReadableNumber(data.price) }} ₽
          </div>
        </div>

        <CartDelete
          class="right__delete"
          @click="cartStore.onRemoveProduct(data.id)"
        />
      </div>
    </div>

    <div class="note-block">
      <ElInput
        :model-value="data.note"
        :rows="3"
        type="textarea"
        placeholder="Введите текст записки"
        @update:model-value="e => { cartStore.onChangeNote(data.id, e) }"
      />

      <CartDelete title="Записка не нужна" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-card {
  padding: 32px;
  box-shadow: 0 6px 20px 6px #3540471a;
  background: #fff;
  border-radius: 16px;

  &__main {
    display: flex;
  }

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
      margin-bottom: 18px;
    }
  }

  .right {
    margin-left: auto;
    width: 100px;
    flex-shrink: 0;
    text-align: right;
    display: flex;
    flex-direction: column;

    &__price {
      .total {
        font-size: 18px;
        font-weight: 500;
      }
      .detail {
        font-size: 12px;
        color: #888888;
      }
    }

    &__delete {
      margin-top: auto;
    }
  }

  .note-block {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #eee;
  }
}
</style>
