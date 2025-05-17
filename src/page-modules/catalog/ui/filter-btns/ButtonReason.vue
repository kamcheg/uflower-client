<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import type { IReason } from '@/shared/types/common'
import {useReasonsStore} from "~/shared/stores/useReasonsStore";
import type {IFilters} from "~/page-modules/catalog/model/types";

const {reasons} = useReasonsStore()

const model = defineModel<IFilters['reasons']>({required: true})

/* DATA */
const open = ref(false)
const selected = ref<IReason['id'][]>([])

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
      Повод<ElIcon class="el-icon--right">
        <ArrowDown />
      </ElIcon>
    </ElButton>
  </ElBadge>

  <ClientOnly>
    <ElDrawer
      v-model="open"
      title="Фильтр: повод"
      size="400px"
      direction="btt"
    >
      <ElCheckboxGroup
        v-model="selected"
        class="options-list"
      >
        <ElCheckbox
          v-for="reason of reasons"
          :key="reason.id"
          :value="reason.id"
          :label="reason.name"
          class="options-list__item"
        />
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
.options-list {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  grid-row-gap: 10px;

  &__item {
    cursor: pointer;
    flex-shrink: 0;
    width: 50%;
    margin-right: 0;
    padding-right: 20px;
  }
  &:deep {
    .el-checkbox__label {
      white-space: wrap;
    }
  }
}
</style>
