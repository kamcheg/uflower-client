<script setup lang="ts">
import {fetchAbout, type IResponse} from "~/shared/api/fetchAbout";
import {getSchedule} from "~/shared/lib/utils/getSchedule";

useHead({
  script: [
    { src: 'https://api-maps.yandex.ru/v3/?apikey=c6ef95d2-f35a-4a78-9430-3e7530926756&lang=ru_RU', type: 'text/javascript' },
  ],
})

const { data } = await useAsyncData<IResponse>(
  'about',
  () => fetchAbout(),
)

const schedule = computed(() => getSchedule(data.value?.schedule))
</script>

<template>
  <div v-if="!data" />
  <div v-else class="page-about">
    <div class="container">
      <div class="preview">
        <div class="title">
          Мы рады видеть вас на MyFlower
        </div>
        <div class="description">
          Команда MyFlower работает, чтобы вы могли дарить эмоции: светлые и яркие, романтичные и страстные, нежные и откровенные - такие же разные и неповторимые как и вы!
        </div>
      </div>

      <h1>c6ef95d2-f35a-4a78-9430-3e7530926756</h1>

      <div class="preview contact-info">
        <div class="map"></div>

        <div class="desc">
          <template v-if="data.shops.length === 1">
            <p class="desc__item">
              <b>Наш адрес:</b> г. Махачкала, Улица Титова, 144 к3
            </p>

            <!--  TODO  -->
            <p class="desc__item">
              <b>Номер телефона:</b> {{ data.sitePhone }}
            </p>

            <p class="desc__item">
              <b>Электронный адрес:</b> {{ data.email }}
            </p>

            <p class="desc__item">
              <b>График работы:</b> {{ schedule }}
            </p>
          </template>

          <div v-else class="shops">
            <p class="shops__title">Наши магазины</p>
            <div
              v-for="(shop, index) of data.shops"
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
    pointer-events: none;
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
      background: red;
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
