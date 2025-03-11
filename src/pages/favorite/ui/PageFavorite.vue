<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import axios from 'axios'
import { type IProduct, ProductCard } from '~/entities/product'

/* DATA */
const favorite = useLocalStorage('favorite', [2, 3])
const products = ref<IProduct[]>([])

async function fetch() {
  try {
    products.value = await axios.get<IProduct[]>('http://localhost:4000/products', {
      params: {
        id: favorite.value.length ? favorite.value : undefined,
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
      v-for="i of products.slice(0, 4)"
      :key="i.id"
      :data="i"
    />
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
