<script setup lang="ts">
import { useCartStore } from '~/entities/cart'
import { useFavoritesStore } from '~/entities/favorites'
import IconFavorite from '~/shared/components/icons/IconFavorite.vue'
import IconCart from '~/shared/components/icons/IconCart.vue'
import {fetchAbout, type IResponse} from "~/app/layouts/default/model/api";

/* INIT */
const cartStore = useCartStore()
const favoritesStore = useFavoritesStore()

const { data } = await useAsyncData<IResponse>(
  'about',
  () => fetchAbout(),
)

const schedule = computed(() => {
  if (!data.value?.schedule?.from || !data.value?.schedule?.to) {
    return ''
  }

  return `Ежедневно с ${data.value?.schedule?.from} до ${data.value?.schedule?.to}`
})
</script>

<template>
  <div class="header">
    <div class="left">
      <NuxtLink
        to="/"
        class="logo-place"
      >
        <img :src="data?.logo" alt="logo">
      </NuxtLink>
    </div>

    <div class="center">
      <div class="nav">
        <ElLink
          href="/"
          class="nav__item"
        >
          Главная
        </ElLink>
        <ElLink
          href="/catalog"
          class="nav__item"
        >
          Каталог
        </ElLink>
        <ElLink
          href="/about"
          class="nav__item"
        >
          О нас
        </ElLink>
      </div>
    </div>

    <div class="right">
      <div v-if="data" class="phone">
        <div class="number">
          {{ data?.sitePhone }}
        </div>
        <div class="schedule">
          {{ schedule }}
        </div>
      </div>

      <NuxtLink to="/favorite">
        <ElBadge
          :offset="[-10, 5]"
          :value="favoritesStore.list.length || undefined"
        >
          <ElButton
            circle
            size="large"
          >
            <IconFavorite style="width: 16px;" />
          </ElButton>
        </ElBadge>
      </NuxtLink>

      <NuxtLink
        to="/cart"
        style="margin-left: 12px;"
      >
        <ElBadge
          :offset="[-10, 5]"
          :value="cartStore.productsCounter || undefined"
        >
          <ElButton
            circle
            size="large"
          >
            <IconCart style="width: 16px;" />
          </ElButton>
        </ElBadge>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid #eee;
  background: #fff;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  .center {
    .nav {
      margin-left: 120px;

      &__item {
        font-weight: 500;

        &:not(:first-child) {
          margin-left: 20px;
        }
      }
    }
  }

  .left {
    .logo-place {
      display: block;
      font-size: 30px;
      font-weight: 700;
    }
  }

  .right {
    margin-left: auto;
    display: flex;
    align-items: center;

    .phone {
      margin-right: 24px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .number {
      }

      .schedule {
        margin-bottom: 2px;
        font-size: 10px;
        color: #8f8f8f;
      }
    }
  }
}
</style>
