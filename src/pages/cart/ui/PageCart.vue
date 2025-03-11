<script setup lang="ts">
import ProductCard from '~/shared/components/ProductCard.vue'
import { products } from '~/mock'
</script>

<template>
  <h1>Корзина</h1>

  <div class="catalog">
    <ProductCard
      v-for="i of products.slice(2, 4)"
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
