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
  <h1>Избранное</h1>

  <div class="catalog">
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
</template>

<style scoped lang="scss">
.catalog {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 24px;
}
</style>
