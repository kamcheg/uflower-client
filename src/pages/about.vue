<script setup lang="ts">
import {fetchAbout, type IResponse} from "~/shared/api/fetchAbout";
import {getSchedule} from "~/shared/lib/utils/getSchedule";

import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
} from 'vue-yandex-maps';
import type { YMap } from '@yandex/ymaps3-types';

const map = shallowRef<null | YMap>(null);

const { data } = await useAsyncData<IResponse>(
  'about',
  () => fetchAbout(),
)

const schedule = computed(() => getSchedule(data.value?.schedule))
</script>

<template>
  <div v-if="data" class="page-about">
    <div class="container">
      <div class="card-about preview">
        <div v-html="data.aboutTitle" class="title" />
        <div v-html="data.aboutDescription" class="description" />
      </div>

      <div v-if="data.shops.length > 0" class="card-about contact-info">
        <div class="map">
          <YandexMap
            v-model="map"
            :settings="{
              location: {
                center: data.shops[0]?.coords || [37.617644, 55.755819],
                zoom: 9,
              },
            }"
            width="100%"
            height="100%"
          >
            <YandexMapDefaultSchemeLayer/>
            <YandexMapDefaultFeaturesLayer/>
            <YandexMapDefaultMarker
              v-for="shop of data.shops"
              :key="shop.id"
              :settings="{ coordinates: shop.coords }"
            />
          </YandexMap>
        </div>

        <div class="shops">
          <p class="shops__title">{{data.shops.length === 1 ? 'Наш магазин' : 'Наши магазины'}}</p>
          <div
            v-for="shop of data.shops"
            :key="shop.id"
            class="shop-info"
          >
            <p class="shop-info__item">
              <b>Адрес:</b> {{ shop.address }}
            </p>

            <!--  TODO  -->
            <p class="shop-info__item">
              <b>Номер телефона:</b> {{ shop.phone }}
            </p>

            <p class="shop-info__item">
              <b>График работы:</b> {{ schedule }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/app/styles/_vars";

.page-about {
  .card-about {
    background: #f6f6f6;
    border-radius: 32px;
    height: fit-content;
    overflow: hidden;
    position: relative;
    width: 100%;

    @media screen and (max-width: $adaptive-size-sm) {
      border-radius: 16px;
    }
  }

  .preview {
    padding: 100px;

    @media screen and (max-width: $adaptive-size-lg) {
      padding: 50px;
    }

    @media screen and (max-width: $adaptive-size-sm) {
      padding: 16px;
    }

    .title {
      text-align: center;
      font-size: 44px;
      margin-bottom: 16px;

      @media screen and (max-width: $adaptive-size-md) {
        font-size: 36px;
      }

      @media screen and (max-width: $adaptive-size-sm) {
        font-size: 30px;
      }
    }
    .description {
      text-align: center;
      font-size: 24px;
      margin: 0 auto;
      max-width: 788px;

      @media screen and (max-width: $adaptive-size-md) {
        font-size: 20px;
      }

      @media screen and (max-width: $adaptive-size-sm) {
        font-size: 16px;
      }
    }
  }

  .contact-info {
    min-height: 440px;
    margin-top: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: $adaptive-size-md) {
      grid-template-columns: 1fr;
    }

    .map {
      @media screen and (max-width: $adaptive-size-md) {
        height: 360px;
      }
    }

    .shops {
      padding: 32px;

      @media screen and (max-width: $adaptive-size-sm) {
        padding: 16px 10px;
      }

      &__title {
        font-size: 22px;
        font-weight: 600;
      }

      .shop-info {
        box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
        margin-top: 12px;
        padding: 20px;
        background: #fff;
        border-radius: 12px;

        @media screen and (max-width: $adaptive-size-sm) {
          font-size: 14px;
        }

        &__item {
          &:not(:first-child) {
            margin-top: 12px;

            @media screen and (max-width: $adaptive-size-sm) {
              margin-top: 6px;
            }
          }

          b {
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
