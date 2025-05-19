<script setup lang="ts">
import type { IProduct } from '~/entities/product'
import { toReadableNumber } from '~/shared/lib/utils/toReadableNumber'
import IconFlame from "~/shared/components/icons/IconFlame.vue";

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
        <slot name="favorite-button" />
        <slot name="cart-button" />
      </div>

      <div v-if="data.inStock" class="hot-offer">
        <IconFlame style="width: 16px;" />
        <span>Собрали сегодня</span>
      </div>
    </div>

    <div
      class="title"
      :title="data.name"
    >
      {{ data.name }}
    </div>

    <div
      class="description"
      :title="data.description"
    >
      {{ data.description }}
    </div>

    <div class="price">
      {{ toReadableNumber(data.price) }} ₽
    </div>

    <a v-if="false" :href="'/catalog/' + data.id">
      <div class="btns">
        <ElButton
          class="btns__item"
        >
          Подробнее
        </ElButton>
      </div>
    </a>
  </div>
</template>

<style scoped lang="scss">
@import "@/app/styles/_vars";

.product-card {
  .image-place {
    width: 100%;
    padding-bottom: 100%;
    position: relative;

    .hot-offer {
      padding: 2px 10px;
      background: #f1a375;
      border-radius: 8px;
      position: absolute;
      bottom: 10px;
      left: 10px;
      font-size: 12px;
      display: flex;
      align-items: center;
      color: #fff;

      span {
        padding-left: 4px;
      }
    }

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
    max-width: 100%;
    white-space: nowrap; /* Запрещает перенос текста */
    overflow: hidden; /* Скрывает лишний текст */
    text-overflow: ellipsis; /* Добавляет троеточие */

    @media screen and (max-width: $adaptive-size-sm) {
      font-size: 14px;
    }
  }

  .description {
    margin-top: 8px;
    max-width: 100%;
    white-space: nowrap; /* Запрещает перенос текста */
    overflow: hidden; /* Скрывает лишний текст */
    text-overflow: ellipsis; /* Добавляет троеточие */
    font-size: 14px;
    color: rgb(107, 113, 112);

    @media screen and (max-width: $adaptive-size-sm) {
      font-size: 12px;
    }
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
