<script setup lang="ts">
import { CartProductCard, useCartStore } from '~/entities/cart'

/* CART */
const cartStore = useCartStore()

onMounted(async () => {
  await cartStore.fetchCartProducts()
})
</script>

<template>
  <h1>Корзина</h1>

  <div class="catalog">
    <CartProductCard
      v-for="i of cartStore.products"
      :key="i.id"
      :data="i"
      class="catalog__card"
    />
  </div>
</template>

<style scoped lang="scss">
.catalog {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;

    &__card {
        width: 700px;
    }
}
</style>
