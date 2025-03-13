<script setup lang="ts">
import { CartProductCard, CartTotal, useCartStore } from '~/entities/cart'

/* CART */
const cartStore = useCartStore()

onMounted(async () => {
  await cartStore.fetchCartProducts()
})
</script>

<template>
  <div class="page-cart">
    <div class="container">
      <h1>Корзина</h1>

      <div class="page-cart__container">
        <div class="catalog">
          <CartProductCard
            v-for="i of cartStore.products"
            :key="i.id"
            :data="i"
          />
        </div>

        <CartTotal class="page-cart__total" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-cart {
  &__container {
    margin-top: 24px;
    display: flex;

    .catalog {
      flex-grow: 1;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 24px;
    }
  }

  &__total {
    width: 350px;
    margin-left: 32px;
    align-self: flex-start;
  }
}
</style>
