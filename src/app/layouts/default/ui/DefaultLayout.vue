<script setup lang="ts">
import TheHeader from './TheHeader.vue'
</script>

<template>
  <div class="default-layout">
    <TheHeader />
    <div class="default-layout__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
    &__content {
        padding: 24px;
    }
}
</style>
