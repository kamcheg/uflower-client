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
      <div class="preview">
        <div class="title">
          {{ data.aboutTitle }}
        </div>
        <div class="description">
          {{ data.aboutDescription }}
        </div>
      </div>

      <div v-if="data.shops.length > 0" class="preview contact-info">
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

        <div class="desc">
          <div class="shops">
            <p class="shops__title">{{data.shops.length === 1 ? 'Наш магазин' : 'Наши магазины'}}</p>
            <div
              v-for="shop of data.shops"
              :key="shop.id"
              class="shop-info"
            >
              <p class="desc__item">
                <b>Адрес:</b> {{ shop.address }}
              </p>

              <!--  TODO  -->
              <p class="desc__item">
                <b>Номер телефона:</b> {{ shop.phone }}
              </p>

              <p class="desc__item">
                <b>График работы:</b> {{ schedule }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-about {
  .preview {
    background: #f6f6f6;
    border-radius: 32px;
    height: fit-content;
    min-height: 440px;
    overflow: hidden;
    position: relative;
    width: 100%;
    padding: 100px;

    .title {
      text-align: center;
      font-size: 44px;
      margin-bottom: 16px;
    }
    .description {
      text-align: center;
      font-size: 24px;
      margin: 0 auto;
      max-width: 788px;
    }
  }

  .contact-info {
    margin-top: 24px;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .map {
      flex-shrink: 0;
    }

    .desc {
      padding: 32px;

      &__item {
        &:not(:first-child) {
          margin-top: 12px;
        }

        b {
          font-weight: 600;
        }
      }
    }
  }

  .shops {
    &__title {
      font-size: 22px;
      font-weight: 600;
    }

    .shop-info {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      margin-top: 12px;
      padding: 20px;
      background: #fff;
      border-radius: 12px;
    }
  }
}
</style>
