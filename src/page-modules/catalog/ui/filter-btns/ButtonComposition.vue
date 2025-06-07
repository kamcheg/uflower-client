<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import type { IFlowerType } from '@/shared/types/common'
import {useFlowerTypesStore} from "~/shared/stores/useFlowerTypesStore";
import type {IFilters} from "~/page-modules/catalog/model/types";

const model = defineModel<IFilters['composition']>({required: true})

/* INIT */
const {flowerTypes} = useFlowerTypesStore()

/* DATA */
const open = ref(false)
const selected = ref<IFlowerType['id'][]>([])

/* METHODS */
function onApply() {
  model.value = [...selected.value]
  open.value = false
}
function onReset() {
  model.value = []
  selected.value = []
  open.value = false
}
</script>

<template>
  <ElBadge
    v-bind="$attrs"
    :is-dot="!!model.length"
  >
    <ElButton
      @click="open = true"
    >
      Цветы<ElIcon class="el-icon--right">
      <ArrowDown />
    </ElIcon>
    </ElButton>
  </ElBadge>

  <ClientOnly>
    <ElDrawer
      v-model="open"
      title="Фильтр: цветы"
      size="400px"
      direction="btt"
    >
      <ElCheckboxGroup
        v-model="selected"
        class="flower-types"
      >
        <ElCheckbox
          v-for="type of flowerTypes"
          :key="type.id"
          :value="type.id"
          class="flower-types__item"
        >
          {{ type.name }}
          <span style="color: #ccc; font-size: 12px; padding-left: 10px;">
            {{ type.quantity }}
          </span>
        </ElCheckbox>
      </ElCheckboxGroup>

      <template #footer>
        <div>
          <ElButton @click="onReset">
            Очистить
          </ElButton>
          <ElButton @click="onApply">
            Применить
          </ElButton>
        </div>
      </template>
    </ElDrawer>
  </ClientOnly>
</template>

<style scoped lang="scss">
.flower-types {
  display: flex;
  flex-wrap: wrap;
  grid-row-gap: 10px;

  &__item {
    flex-shrink: 0;
    width: 25%;
    margin-right: 0;
    padding-right: 20px;

    @media screen and (max-width: $adaptive-size-md) {
      width: 33.3%;
    }

    @media screen and (max-width: $adaptive-size-sm) {
      width: 50%;
    }
  }
  &:deep(.el-checkbox__label) {
    white-space: wrap;
  }
}
</style>
