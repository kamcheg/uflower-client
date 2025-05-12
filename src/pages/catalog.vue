<script setup lang="ts">
import { ProductCard } from '~/entities/product'
import ButtonComposition from '~/page-modules/catalog/ui/filter-btns/ButtonComposition.vue'
import ButtonPrice from '~/page-modules/catalog/ui/filter-btns/ButtonPrice.vue'
import ButtonReason from '~/page-modules/catalog/ui/filter-btns/ButtonReason.vue'
import ButtonRecipient from '~/page-modules/catalog/ui/filter-btns/ButtonRecipient.vue'
import ButtonSize from '~/page-modules/catalog/ui/filter-btns/ButtonSize.vue'
import { AddToFavorites } from '~/features/product'
import { AddToCart } from '~/features/product/addToCart'
import { fetchProducts } from "~/page-modules/catalog/model/api";
import type {IFilters} from "~/page-modules/catalog/model/types";
import type {IPagination} from "~/shared/types/common";

/* DATA */
const filters = ref<IFilters>({
  composition: [],
  price: {
    min: null,
    max: null,
  },
  reasons: [],
  recipients: [],
  sizes: [],
})
const pagination = ref<IPagination>({
  page: 1,
  total: 1,
  limit: 8,
})

const { data, refresh } = await useAsyncData(
  'catalog-products',
  () => fetchProducts(filters.value, pagination.value),
  { server: false }
)
watch(data, () => {
  const total = data.value?.pagination?.total
  if (total !== undefined) {
    pagination.value.total = total
  }
})

watch([filters, pagination], () => {
  refresh()
}, { deep: true })
</script>

<template>
  <div class="catalog">
    <div class="catalog__filters">
      <ButtonComposition v-model="filters.composition" />

      <ButtonPrice
        v-model="filters.price"
        style="margin-left: 10px;"
      />

      <ButtonReason
        v-model="filters.reasons"
        style="margin-left: 10px;"
      />

      <ButtonRecipient
        v-model="filters.recipients"
        style="margin-left: 10px;"
      />

      <ButtonSize
        v-model="filters.sizes"
        style="margin-left: 10px;"
      />
    </div>

    <div class="catalog__container">
      <ProductCard
        v-for="i of data?.data || []"
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

    <div class="catalog__pagination-wrapper">
      <ElPagination
        v-model:current-page="pagination.page"
        :page-size="pagination.limit"
        :pager-count="5"
        layout="prev, pager, next"
        :total="pagination.total"
        background
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.catalog {
  &__container {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 24px;
  }

  &__pagination-wrapper {
    margin-top: 32px;
    display: flex;
    justify-content: center;
  }
}
</style>
