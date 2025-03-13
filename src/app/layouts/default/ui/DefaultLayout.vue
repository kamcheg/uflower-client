<script setup lang="ts">
import TheHeader from './TheHeader.vue'
import AppLoading from '~/shared/components/AppLoading.vue'
import { useLoadingStore } from '~/shared/stores/useLoadingStore'

const loadingStore = useLoadingStore()
</script>

<template>
  <div class="default-layout">
    <TheHeader class="default-layout__header" />

    <div class="default-layout__content">
      <AppLoading
        v-if="loadingStore.isLoading"
        class="default-layout__loading"
      />
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  &__header {
    position: fixed;
    z-index: 99;
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

  &__loading {
    position: absolute;
    z-index: 9999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
