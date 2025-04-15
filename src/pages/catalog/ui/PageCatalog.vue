<script setup lang="ts">
// import {DCaret} from "@element-plus/icons-vue";
import { filterInjectionKey } from '../config/filterSymbol'
import { useFilter } from '../model/composables'
import { ProductCard } from '~/entities/product'
import ButtonComposition from '~/pages/catalog/ui/filter-btns/ButtonComposition.vue'
import ButtonPrice from '~/pages/catalog/ui/filter-btns/ButtonPrice.vue'
import ButtonReason from '~/pages/catalog/ui/filter-btns/ButtonReason.vue'
import ButtonRecipient from '~/pages/catalog/ui/filter-btns/ButtonRecipient.vue'
import ButtonSize from '~/pages/catalog/ui/filter-btns/ButtonSize.vue'
import type { IProduct } from '~/entities/product'
import { AddToFavorites } from '~/features/product'
import { AddToCart } from '~/features/product/addToCart'
import { products as mockProducts } from '~/mock'

/* INIT */
const filter = useFilter()
provide(filterInjectionKey, filter)

/* DATA */
const products = ref<IProduct[]>(mockProducts)

function fetchProducts() {}
</script>

<template>
  <div>
    <!--        <ElButton> -->
    <!--            <ElIcon class="el-icon&#45;&#45;left"><DCaret /></ElIcon>Новинки -->
    <!--        </ElButton> -->

    <ButtonComposition
      @apply="fetchProducts"
    />

    <ButtonPrice
      style="margin-left: 10px;"
      @apply="fetchProducts"
    />

    <ButtonReason
      style="margin-left: 10px;"
      @apply="fetchProducts"
    />

    <ButtonRecipient
      style="margin-left: 10px;"
      @apply="fetchProducts"
    />

    <ButtonSize
      style="margin-left: 10px;"
      @apply="fetchProducts"
    />
  </div>

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
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 24px;
}
</style>
