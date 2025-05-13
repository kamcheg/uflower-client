<script setup lang="ts">
import { type IProduct, ProductCard } from '~/entities/product'
import { AddToFavorites } from '~/features/product'
import { useFavoritesStore } from '~/entities/favorites'
import { AddToCart } from '~/features/product/addToCart'
import { products as mockProducts } from '~/mock'
import {apiInstance} from "~/shared/lib/axios";
import type {ProductResponseDto} from "~/shared/dtos/product.dto";
import {transformServerProductToClient} from "~/shared/adapters/product";

/* INIT */
const favoritesStore = useFavoritesStore()

/* DATA */
const products = ref<IProduct[]>([])

async function fetch() {
  if (favoritesStore.list.length === 0) {
    return
  }

  try {
    const { data } = await apiInstance.get<ProductResponseDto[]>('/flowers/find-by-ids', {
      params: { ids: favoritesStore.list }
    })

    products.value = data.map(p => transformServerProductToClient(p))
  }
  catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  fetch()
})
</script>

<template>
  <div v-if="products.length" class="catalog">
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

  <div
    v-else
    class="page-favorite-empty"
  >
    <div class="container">
      <h1>
        Список избранных букетов пока пуст.<br/>Отметьте понравившиеся букеты для удобства.
      </h1>

      <ElLink
        href="/catalog"
        type="primary"
      >
        Перейти в каталог
      </ElLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.catalog {
  &__container {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 24px;
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
