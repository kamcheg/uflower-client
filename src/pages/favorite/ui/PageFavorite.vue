<script setup lang="ts">
import axios from 'axios'
import { type IProduct, ProductCard } from '~/entities/product'
import { AddToFavorites } from '~/features/product'
import { useFavoritesStore } from '~/entities/favorites'

const favoritesStore = useFavoritesStore()

/* DATA */
const products = ref<IProduct[]>([])

async function fetch() {
  try {
    products.value = await axios.get<IProduct[]>('http://localhost:4000/products', {
      params: {
        id: favoritesStore.list.length ? favoritesStore.list : [-1],
      },
    })
      .then(e => e.data)
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
    </ProductCard>
  </div>
</template>

<style scoped lang="scss">
.catalog {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
}
</style>
