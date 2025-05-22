<script setup lang="ts">
import { Navigation, Thumbs, FreeMode, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {fetchOneProduct, type IProductDetail} from "~/page-modules/catalog-id/model/api";
import {toReadableNumber} from "~/shared/lib/utils/toReadableNumber";
import { useRoute } from 'vue-router'
import {useFavorite} from "~/features/product/addToFavorites/model/useFavorite";
import {useCart} from "~/features/product/addToCart/model/useCart";

const route = useRoute()

const {
  isInFavorite,
  onToggleFavorite
} = useFavorite(+route.params.id)

const {
  isInCart,
  onToggleCart
} = useCart(+route.params.id)

const { data } = await useAsyncData<IProductDetail>(
  'product-' + route.params.id,
  () => fetchOneProduct(String(route.params.id)),
  { server: false }
)

const modules = [FreeMode, Navigation, Thumbs]

const thumbsSwiper = ref<SwiperClass | null>(null);

const setThumbsSwiper = (swiper: SwiperClass) => {
  thumbsSwiper.value = swiper;
};
</script>

<template>
  <div v-if="!data" class="page-product">
    Произошла ошибка!
  </div>
  <div v-else class="page-product">
    <div class="container">
      <el-breadcrumb separator="/" class="page-product__breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">Каталог</el-breadcrumb-item>
        <el-breadcrumb-item>
          Букет "{{ data.name }}"
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="page-product__main">
        <div class="slider-wrapper">
          <swiper
            :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }"
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="mySwiper2"
          >
            <swiper-slide v-for="(image, index) of data.images" :key="index">
              <img :src="image" />
            </swiper-slide>
          </swiper>
          <swiper
            v-if="data.images.length > 1"
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="data.images.length >= 5 ? 5 : data.images.length"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="(image, index) of data.images" :key="index">
              <img :src="image" />
            </swiper-slide>
          </swiper>
        </div>

        <div class="info">
          <p class="info__title">Букет "{{ data.name }}"</p>

          <p class="info__description">
            {{ data.description }}
          </p>

          <p class="info__price">
            {{ toReadableNumber(data.price) }} ₽
          </p>

          <div v-if="data.ingredients.length > 0" class="ingredients">
            <p class="ingredients__title">Состав:</p>
            <p
              v-for="(ing, index) of data.ingredients"
              :key="index"
              class="ingredients__item"
            >
              {{ ing.value }}<span v-if="ing.quantity"> - {{ ing.quantity }} шт</span>
            </p>
          </div>

          <div class="btns">
            <ElButton
              type="primary"
              plain
              class="btns__item"
              @click="onToggleFavorite"
            >
              {{ isInFavorite ? 'Удалить из избранного' : 'Добавить в избранное' }}
            </ElButton>

            <ElButton
              v-if="!isInCart"
              type="primary"
              plain
              class="btns__item"
              @click="onToggleCart"
            >
              Добавить в корзину
            </ElButton>
            <a v-else href="/cart" style="margin-left: 6px;">
              <ElButton
                type="primary"
                plain
              >
                Перейти в корзину
              </ElButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-product {
  &__breadcrumb {
    margin: 10px 0 32px;
  }

  &__main {
    display: flex;
    align-items: center;
  }

  .info {
    margin-left: 48px;

    &__title {
      font-size: 32px;
      font-weight: 700;
    }

    &__description {
      margin-top: 20px;
      font-size: 24px;
    }

    &__price {
      margin-top: 20px;
      font-size: 32px;
      font-weight: 500;
    }

    .btns {
      margin-top: 32px;
    }
  }

  .ingredients {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 10px;
    margin-top: 24px;

    &__title {
      font-size: 18px;
      font-weight: 600;
    }
    &__item {
      margin-top: 4px;
      font-size: 13px;
    }
  }
}

.slider-wrapper {
  width: 520px;
  flex-shrink: 0;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper {
    width: 100%;
    //height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .mySwiper2 {
    height: 80%;
    width: 100%;

    img {
      border-radius: 8px;
    }
  }

  .mySwiper {
    width: 400px;
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;

    img {
      border-radius: 8px;
    }
  }

  .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
