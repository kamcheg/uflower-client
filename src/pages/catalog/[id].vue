<script setup lang="ts">
import { Navigation, Thumbs, FreeMode, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [FreeMode, Navigation, Thumbs]

const thumbsSwiper = ref<SwiperClass | null>(null);

const setThumbsSwiper = (swiper: SwiperClass) => {
  thumbsSwiper.value = swiper;
};

const images = ref([
  'https://uflor.ru/api-v2/thumbnail/?src=/upload/resize_cache/watermark/1/ijttcvdz15q0ejhhxac582ksvig1zf8v.JPG&w=592&h=592',
  'https://uflor.ru/api-v2/thumbnail/?src=/upload/resize_cache/watermark/1/wwe4ejw3bhcp5v6gdq5es5u23m9vy60f.JPG&w=592&h=592',
  'https://uflor.ru/api-v2/thumbnail/?src=/upload/resize_cache/watermark/1/hb686kk0am3jevahnkmk7w8vr0sld4n3.JPG&w=592&h=592',
  'https://uflor.ru/api-v2/thumbnail/?src=/upload/resize_cache/watermark/1/7p5h0ppqpgkjqniopl6cby7hsqbfp80h.JPG&w=592&h=592',
])
</script>

<template>
  <div class="page-product">
    <div class="container">
      <el-breadcrumb separator="/" class="page-product__breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">Каталог</el-breadcrumb-item>
        <el-breadcrumb-item>
          Букет "Миром правит любовь"
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
            <swiper-slide v-for="(image, index) of images" :key="index">
              <img :src="image" />
            </swiper-slide>
          </swiper>
          <swiper
            v-if="images.length > 1"
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="images.length >= 5 ? 5 : images.length"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="(image, index) of images" :key="index">
              <img :src="image" />
            </swiper-slide>
          </swiper>
        </div>

        <div class="info">
          <p class="info__title">Букет "Миром правит любовь"</p>

          <p class="info__description">
            Цветочная композиция «Микс гиацинтов с мимозой в коробке» — идеальный подарок для любого повода.
          </p>

          <p class="info__price">
            19 200 ₽
          </p>

          <div class="ingredients">
            <p class="ingredients__title">Состав:</p>
            <p class="ingredients__item">Тюльпан желтый, оранжевый - 25 шт</p>
            <p class="ingredients__item">Упаковка дизайнерская пленка</p>
            <p class="ingredients__item">Лента атласная</p>
          </div>

          <div class="btns">
            <ElButton
              type="primary"
              plain
              class="btns__item"
            >
              Добавить в избранное
            </ElButton>
            <ElButton
              type="primary"
              plain
              class="btns__item"
            >
              Добавить в корзину
            </ElButton>
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
