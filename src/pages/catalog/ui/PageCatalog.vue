<script setup lang="ts">
// import {DCaret} from "@element-plus/icons-vue";
import axios from 'axios'
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

/* INIT */
const filter = useFilter()
provide(filterInjectionKey, filter)

/* DATA */
const products = ref<IProduct[]>([])

onMounted(() => {
  fetchProducts()
})

/* METHODS */
async function fetchProducts() {
  try {
    products.value = await axios.get<IProduct[]>('http://localhost:4000/products', {
      params: {
        price_gte: filter.price.value.min || undefined,
        price_lte: filter.price.value.max || undefined,
      },
    })
      .then(e => e.data)
  }
  catch (e) {
    console.log('err', e)
  }
}
</script>

<template>
  <div>
    <!--        <ElButton> -->
    <!--            <ElIcon class="el-icon&#45;&#45;left"><DCaret /></ElIcon>Новинки -->
    <!--        </ElButton> -->

    <ButtonComposition
      style="margin-right: 10px;"
      @apply="fetchProducts"
    />

    <ButtonPrice
      style="margin-right: 10px;"
      @apply="fetchProducts"
    />

    <ButtonReason
      style="margin-right: 10px;"
      @apply="fetchProducts"
    />

    <ButtonRecipient
      style="margin-right: 10px;"
      @apply="fetchProducts"
    />

    <ButtonSize
      style="margin-right: 10px;"
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
