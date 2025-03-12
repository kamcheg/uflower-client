<script setup lang="ts">
import 'vue-loading-overlay/dist/css/index.css'
import TheHeader from './TheHeader.vue'
import AppLoading from '~/shared/components/AppLoading.vue'
import { useLoadingStore } from '~/shared/stores/useLoadingStore'

const loadingStore = useLoadingStore()
</script>

<template>
  <div class="default-layout">
    <TheHeader class="default-layout__header" />

    <div class="default-layout__content">
      <AppLoading v-if="loadingStore.isLoading" />
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  &__header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
  }
  &__content {
    position: relative;
    margin-top: 80px;
    min-height: 100vh;
    padding: 24px;
  }
}
</style>
