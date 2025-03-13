<script setup lang="ts">
import { Right } from '@element-plus/icons-vue'

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="template">
    <div class="title">
      {{ title }}
    </div>

    <div class="catalog">
      <slot />
    </div>

    <NuxtLink
      to="/catalog"
      class="template-link"
    >
      Перейти в каталог<ElIcon class="template-link__icon"><Right /></ElIcon>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.template {
  .title {
    font-size: 24px;
    font-weight: 600;
  }

  .catalog {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 24px;
  }

  &-link {
    cursor: pointer;
    transition-duration: 0.3s;
    display: inline-flex;
    align-items: center;
    margin-top: 18px;
    padding: 10px 24px;
    background: #fff;
    border-radius: 100px;
    box-shadow: rgba(53, 64, 71, 0.1) 0px 6px 20px 0px;

    &:hover {
      box-shadow: rgba(53, 64, 71, 0.2) 0px 10px 20px 0px;
    }

    &__icon {
      margin-left: 12px;
    }
  }
}
</style>
