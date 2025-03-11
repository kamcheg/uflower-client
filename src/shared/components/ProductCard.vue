<script setup lang="ts">
import { ShoppingCart, StarFilled } from '@element-plus/icons-vue'
import type { IProduct } from '~/shared/types'

defineProps<{
  data: IProduct
}>()
</script>

<template>
  <div class="product-card">
    <div class="image-place">
      <div class="image-place__inner">
        <img
          :src="data.image"
          alt=""
        >
      </div>

      <div class="image-place__btns">
        <ElButton
          :icon="StarFilled"
          circle
        />
        <ElButton
          :icon="ShoppingCart"
          circle
        />
      </div>
    </div>

    <div
      class="title"
      :title="data.name"
    >
      {{ data.name }}
    </div>

    <div class="price">
      {{ data.price }} ₽
    </div>

    <div class="btns">
      <ElButton class="btns__item">
        Заказать
      </ElButton>
      <ElButton class="btns__item">
        Подробнее
      </ElButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-card {
    .image-place {
        width: 100%;
        padding-bottom: 100%;
        position: relative;

        &__inner {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            border-radius: 8px;
            height: 100%;
            width: 100%;

            img {
                display: block;
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }

        &__btns {
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }

    .title {
        margin-top: 16px;
    }

    .price {
        font-size: 18px;
        font-weight: 600;
        margin-top: 16px;
    }

    .btns {
        margin-top: 16px;
        display: flex;

        &__item {
            flex-grow: 1;
        }
    }
}
</style>
