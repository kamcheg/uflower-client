<script setup lang="ts">
import { useCartStore } from '~/entities/cart'
import { useFavoritesStore } from '~/entities/favorites'
import IconFavorite from '~/shared/components/icons/IconFavorite.vue'
import IconCart from '~/shared/components/icons/IconCart.vue'
import {fetchAbout, type IResponse} from "~/shared/api/fetchAbout";
import {getSchedule} from "~/shared/lib/utils/getSchedule";

/* INIT */
const cartStore = useCartStore()
const favoritesStore = useFavoritesStore()

const { data } = await useAsyncData<IResponse>(
  'about',
  () => fetchAbout(),
)

const schedule = computed(() => getSchedule(data.value?.schedule))

const isSmallScreen = useMediaQuery('(max-width: 576px)')
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

      <NuxtLink
        to="/favorite"
        class="right-link"
      >
        <ElBadge
          :offset="[-3, 3]"
          :value="favoritesStore.list.length || undefined"
        >
          <ElButton
            circle
            :size="isSmallScreen ? 'default' : 'large'"
          >
            <IconFavorite class="right-link__icon" />
          </ElButton>
        </ElBadge>
      </NuxtLink>

      <NuxtLink
        to="/cart"
        class="right-link"
      >
        <ElBadge
          :offset="[-3, 3]"
          :value="cartStore.productsCounter || undefined"
        >
          <ElButton
            circle
            :size="isSmallScreen ? 'default' : 'large'"
          >
            <IconCart class="right-link__icon" />
          </ElButton>
        </ElBadge>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/app/styles/_vars";

.header {
  border-bottom: 1px solid #eee;
  background: #fff;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  @media screen and (max-width: $adaptive-size-sm) {
    padding: 0 10px;
  }

  .center {
    .nav {
      margin-left: 120px;
      display: flex;
      flex-wrap: wrap;
      grid-gap: 20px;

      @media screen and (max-width: $adaptive-size-lg) {
        margin-left: 60px;
      }

      @media screen and (max-width: $adaptive-size-sm) {
        margin-left: 30px;
        margin-right: 10px;
        grid-gap: 8px;
        grid-row-gap: 3px;
      }

      &__item {
        font-weight: 500;
      }
    }
  }

  .left {
    .logo-place {
      display: block;
      font-size: 30px;
      font-weight: 700;

      img {
        display: block;
        max-height: 50px;
        max-width: 100px;
      }
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

      @media screen and (max-width: $adaptive-size-lg) {
        display: none;
      }

      .schedule {
        margin-bottom: 2px;
        font-size: 10px;
        color: #8f8f8f;
      }
    }
  }

  .right-link {
    &:not(:first-child) {
      margin-left: 10px;

      @media screen and (max-width: $adaptive-size-sm) {
        margin-left: 6px;
      }
    }

    &__icon {
      width: 16px;

      @media screen and (max-width: $adaptive-size-sm) {
        width: 14px;
      }
    }
  }
}
</style>
