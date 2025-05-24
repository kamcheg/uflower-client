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
import {useLoadingStore} from "~/shared/stores/useLoadingStore";

const loadingStore = useLoadingStore()

/* DATA */
const productsExist = ref(false)
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
  limit: 12,
  lastPage: 1,
})

const { data, refresh, status } = await useAsyncData(
  'catalog-products',
  async () => fetchProducts(filters.value, pagination.value)
)
// TODO DOUBLE REQUEST
watch(data, () => {
  pagination.value.total = data.value?.pagination?.total || 1
  pagination.value.lastPage = data.value?.pagination?.lastPage || 1
}, { immediate: true })
watch(status, (val) => {
  loadingStore.isLoading = val === 'pending'
})
watch(filters, () => refresh(), { deep: true })
watch(pagination, () => refresh(), { deep: true })
watch(data, () => {
  productsExist.value = !data.value?.pagination?.total
}, { once: true })
</script>

<template>
  <div v-if="status === 'error'" class="catalog-error">
    <h1 class="catalog-error__title">Произошла ошибка!</h1>
    <h2 class="catalog-error__subtitle">Не удалось загрузить данные!</h2>
  </div>

  <div v-else class="catalog">
    <div class="container">
      <div class="catalog__filters">
        <ButtonComposition v-model="filters.composition" />
        <ButtonPrice v-model="filters.price" />
        <ButtonReason v-model="filters.reasons" />
        <ButtonRecipient v-model="filters.recipients" />
        <ButtonSize v-model="filters.sizes" />
      </div>

      <div v-if="!data?.data?.length" style="text-align:center; padding-top: 48px;">
        <h1 v-if="productsExist">По вашим фильтрам товаров не&nbsp;найдено.</h1>
        <h1 v-else>Произошла ошибка!</h1>
      </div>

      <template v-else>
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

        <div v-if="pagination.lastPage > 1" class="catalog__pagination-wrapper">
          <ElPagination
            v-model:current-page="pagination.page"
            :page-size="pagination.limit"
            :pager-count="5"
            layout="prev, pager, next"
            :total="pagination.total"
            background
          />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.catalog {
  &__filters {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 5px;
  }

  &__container {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 20px;

    @media screen and (max-width: $adaptive-size-lg) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media screen and (max-width: $adaptive-size-md) {
      grid-gap: 10px;
    }

    @media screen and (max-width: $adaptive-size-sm) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  &__pagination-wrapper {
    margin-top: 32px;
    display: flex;
    justify-content: center;
  }
}

.catalog-error {
  &__title { text-align: center; }
  &__subtitle { text-align: center; }
}
</style>
