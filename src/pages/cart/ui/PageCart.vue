<script setup lang="ts">
import { ProductCard } from '~/entities/product'
import { useCartStore } from '~/entities/cart'

/* CART */
const cartStore = useCartStore()

onMounted(async () => {
  await cartStore.fetchCartProducts()
})
</script>

<template>
  <h1>Корзина</h1>

  <div class="catalog">
    <ProductCard
      v-for="i of cartStore.products"
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
