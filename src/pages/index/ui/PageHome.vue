<script setup lang="ts">
import TemplateCatalog from '~/pages/index/ui/TemplateCatalog.vue'
import { ProductCard } from '~/entities/product'
import { products } from '~/mock'
import { AddToFavorites } from '~/features/product'
import { AddToCart } from '~/features/product/addToCart'
</script>

<template>
  <div class="page-home">
    <TemplateCatalog title="Собрали сегодня">
      <ProductCard
        v-for="p of products.slice(2, 4)"
        :key="p.id"
        :data="p"
      >
        <template #favorite-button>
          <AddToFavorites :id="p.id" />
        </template>
        <template #cart-button>
          <AddToCart :id="p.id" />
        </template>
      </ProductCard>
    </TemplateCatalog>

    <TemplateCatalog
      title="Новинки"
      style="margin-top: 48px;"
    >
      <ProductCard
        v-for="p of products.slice(14, 19)"
        :key="p.id"
        :data="p"
      >
        <template #favorite-button>
          <AddToFavorites :id="p.id" />
        </template>
        <template #cart-button>
          <AddToCart :id="p.id" />
        </template>
      </ProductCard>
    </TemplateCatalog>

    <TemplateCatalog
      title="Популярные"
      style="margin-top: 48px;"
    >
      <ProductCard
        v-for="p of products.slice(14, 19)"
        :key="p.id"
        :data="p"
      >
        <template #favorite-button>
          <AddToFavorites :id="p.id" />
        </template>
        <template #cart-button>
          <AddToCart :id="p.id" />
        </template>
      </ProductCard>
    </TemplateCatalog>
  </div>
</template>

<style lang="scss" scoped>
</style>
