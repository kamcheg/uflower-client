<script setup lang="ts">
import { Navigation, Thumbs, FreeMode, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [FreeMode, Navigation, Thumbs]

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const images = ref([
  'https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/b40/6grrxyw9w36bc7ari2m3fuyry9thw7e3.jpeg&w=312&h=312',
  'https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/35b/mna8s67ae23f7lyoca4lv0bxw1x33y03.jpg&w=312&h=312',
  'https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/f78/9tmt9ep3bjxrrenni8go2cr91gh8j448.jpeg&w=312&h=312',
  'https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/e28/vcrotv8r24pq0rile42mg8ylh0pt2rf2.jpeg&w=312&h=312',
  'https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/077/jnbjqk6l1ld0ck3e1zukb2hepzbzh7l6.jpg&w=312&h=312',
  'https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/444/zgvtm4joltj0bwlh0juykmpuk0kshwrl.jpg&w=312&h=312',
])
</script>

<template>
  <div class="page-product">
    <div class="container">


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
          @swiper="setThumbsSwiper"
          :spaceBetween="10"
          :slidesPerView="5"
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

        <div class="btns">
          <ElButton
            class="btns__item"
          >
            Добавить в избранное
          </ElButton>
          <ElButton
            class="btns__item"
          >
            Добавить в корзину
          </ElButton>
        </div>
      </div>


    </div>
  </div>
</template>

<style scoped lang="scss">
.page-product {
  .container {
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
}

.slider-wrapper {
  width: 600px;
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
