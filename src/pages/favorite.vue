<script setup lang="ts">
import { type IProduct, ProductCard } from '~/entities/product'
import { AddToFavorites } from '~/features/product'
import { useFavoritesStore } from '~/entities/favorites'
import { AddToCart } from '~/features/product/addToCart'
import axios from "axios";
import type {ProductResponseDto} from "~/shared/dtos/product.dto";
import {transformServerProductToClient} from "~/shared/adapters/product";

/* INIT */
const favoritesStore = useFavoritesStore()

/* DATA */
const { data: products, status } = await useAsyncData<IProduct[]>(
  'favorite-products',
  async () => {
    const { data } = await axios.get<ProductResponseDto[]>('/flowers/find-by-ids', {
      params: { ids: favoritesStore.list }
    })

    const products = data.map(p => transformServerProductToClient(p))

    // Удаляю из избранного если товар с id не найден в базе
    favoritesStore.list = favoritesStore.list.filter(id => (products || []).find(pr => pr.id === id))

    return products
  }
)
</script>

<template>
  <div v-if="status === 'error'" class="page-favorite-empty">
    <div class="container">
      <h1>Произошла ошибка!<br/>Не удалось загрузить данные!</h1>
    </div>
  </div>

  <div v-else-if="products?.length" class="catalog">
    <div class="container">
      <h1>Избранное</h1>
      <div class="catalog__container">
        <ProductCard
          v-for="i of products"
          :key="i.id"
          :data="i"
        >
          <template #favorite-button>
            <AddToFavorites :id="i.id" />
          </template>
          <template #cart-button>
            <AddToCart :id="i.id" />
          </template>
        </ProductCard>
      </div>
    </div>
  </div>

  <div
    v-else
    class="page-favorite-empty"
  >
    <div class="container">
      <h1>
        Список избранных букетов пока пуст.<br/>Отметьте понравившиеся букеты для удобства.
      </h1>

      <ElLink
        href="/"
        type="primary"
      >
        Перейти в каталог
      </ElLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.catalog {
  h1 {
    @media screen and (max-width: $adaptive-size-sm) {
      font-size: 26px;
    }
  }

  &__container {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 20px;

    @media screen and (max-width: $adaptive-size-lg) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media screen and (max-width: $adaptive-size-md) {
      grid-gap: 10px;
    }

    @media screen and (max-width: $adaptive-size-sm) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
}

.page-favorite-empty {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;

    h1 {
      text-align: center;
      margin-bottom: 24px;
    }
  }
}
</style>
