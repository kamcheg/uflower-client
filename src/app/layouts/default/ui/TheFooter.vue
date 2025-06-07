<script setup lang="ts">
import {toPrettyPhone} from "~/shared/lib/utils/phoneNormalizer";
import {fetchAbout, type IResponse} from "~/shared/api/fetchAbout";
import {getSchedule} from "~/shared/lib/utils/getSchedule";

const { data } = await useAsyncData<IResponse>(
  'about',
  () => fetchAbout(),
)

const schedule = computed(() => getSchedule(data.value?.schedule))
</script>

<template>
  <footer class="footer">
    <div class="left">
      <NuxtLink
        to="/"
        class="logo-place"
      >
        <img :src="data?.logo" alt="logo">
      </NuxtLink>
      <a href="https://landing.uflower.ru/" target="_blank" class="logo-place__c">
        © 2025 <span style="color: #409eff">Разработка сайта</span>
      </a>
    </div>
    <div class="right">
      <div v-if="data" class="phone">
        <div class="number">
          {{ toPrettyPhone(data.sitePhone) }}
        </div>
        <div class="schedule">
          {{ schedule }}
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  border-top: 1px solid #ccc;
  background: #fff;
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;

  .left {
    .logo-place {
      display: block;

      img {
        display: block;
        max-height: 50px;
        max-width: 100px;
      }

      &__c {
        font-size: 12px;
        margin-top: 4px;
      }
    }
  }

  .right {
    margin-left: auto;

    .phone {
      margin-right: 24px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .schedule {
        margin-bottom: 2px;
        font-size: 10px;
        color: #8f8f8f;
      }
    }
  }
}
</style>
