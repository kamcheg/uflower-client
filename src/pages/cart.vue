<script setup lang="ts">
import { CartProductCard, CartTotal, useCartStore } from '~/entities/cart'
import ModalMakeOrder from '~/entities/cart/ui/ModalMakeOrder.vue'

/* INIT */
const cartStore = useCartStore()

/* INIT */
const isModalVisible = ref(false)

onMounted(async () => {
  await cartStore.fetchCartProducts()
})
</script>

<template>
  <div
    v-if="cartStore.items.length"
    class="page-cart"
  >
    <!--    v-if="cartStore.products.length" -->
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
        href="/catalog"
        type="primary"
      >
        Перейти в каталог
      </ElLink>
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
