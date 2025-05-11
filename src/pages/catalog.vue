<script setup lang="ts">
import { filterInjectionKey } from '~/page-modules/catalog/config'
import { useFilter } from '~/page-modules/catalog/model/composables'
import { ProductCard } from '~/entities/product'
import ButtonComposition from '~/page-modules/catalog/ui/filter-btns/ButtonComposition.vue'
import ButtonPrice from '~/page-modules/catalog/ui/filter-btns/ButtonPrice.vue'
import ButtonReason from '~/page-modules/catalog/ui/filter-btns/ButtonReason.vue'
import ButtonRecipient from '~/page-modules/catalog/ui/filter-btns/ButtonRecipient.vue'
import ButtonSize from '~/page-modules/catalog/ui/filter-btns/ButtonSize.vue'
import { AddToFavorites } from '~/features/product'
import { AddToCart } from '~/features/product/addToCart'
import { fetchProducts } from "~/page-modules/catalog/model/api";

/* INIT */
const filter = useFilter()
provide(filterInjectionKey, filter)

const { data } = await useAsyncData('catalog-products', fetchProducts, { server: false })
</script>

<template>
  <div>
    <ButtonComposition />

    <ButtonPrice
      style="margin-left: 10px;"
    />

    <ButtonReason
      style="margin-left: 10px;"
    />

    <ButtonRecipient
      style="margin-left: 10px;"
    />

    <ButtonSize
      style="margin-left: 10px;"
    />
  </div>

  <div class="catalog">
    <ProductCard
      v-for="i of data || []"
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
