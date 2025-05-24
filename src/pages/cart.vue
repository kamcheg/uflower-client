<script setup lang="ts">
import { CartProductCard, CartTotal, useCartStore } from '~/entities/cart'
import ModalMakeOrder from '~/entities/cart/ui/ModalMakeOrder.vue'
import {useLoadingStore} from "~/shared/stores/useLoadingStore";

/* INIT */
const cartStore = useCartStore()
const loadingStore = useLoadingStore()
loadingStore.isLoading = true // TODO Hydration mismatch

/* DATA */
const isModalVisible = ref(false)
const isError = ref(false)

onMounted(async () => {
  try {
    await cartStore.fetchCartProducts()

    // Удаляю из корзины если товар с id не найден в базе
    cartStore.items = cartStore.items.filter(p => (cartStore.products || []).find(y => y.id === p.productId))
  } catch (e) {
    isError.value = true
  } finally {
    loadingStore.isLoading = false
  }
})
</script>

<template>
  <h1 v-if="isError">Произошла ошибка!</h1>

  <div v-else-if="loadingStore.isLoading" />

  <template v-else>
    <div
      v-if="cartStore.items.length"
      class="page-cart"
    >
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

          <CartTotal
            class="page-cart__total"
            @order="isModalVisible = true"
          />
        </div>
      </div>

      <ModalMakeOrder v-model="isModalVisible" />
    </div>

    <div
      v-else
      class="page-cart-empty"
    >
      <div class="container">
        <h1>
          В корзине нет товаров!
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
</template>

<style scoped lang="scss">
.page-cart {
  &__container {
    margin-top: 24px;
    display: flex;

    @media screen and (max-width: $adaptive-size-lg) {
      display: block;
    }

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

    @media screen and (max-width: $adaptive-size-lg) {
      width: 100%;
      margin-left: 0;
      margin-top: 24px;
    }
  }
}

.page-cart-empty {
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
