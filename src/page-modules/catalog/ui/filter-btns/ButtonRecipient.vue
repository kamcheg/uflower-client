<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import type { IRecipient } from '@/shared/types/common'
import {useRecipientsStore} from "~/shared/stores/useRecipientsStore";
import type {IFilters} from "~/page-modules/catalog/model/types";

const {recipients} = useRecipientsStore()
const model = defineModel<IFilters['recipients']>({required: true})

/* DATA */
const open = ref(false)
const selected = ref<IRecipient['id'][]>([])

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
      Кому<ElIcon class="el-icon--right">
        <ArrowDown />
      </ElIcon>
    </ElButton>
  </ElBadge>

  <ClientOnly>
    <ElDrawer
      v-model="open"
      title="Фильтр: кому"
      size="400px"
      direction="btt"
    >
      <ElCheckboxGroup
        v-model="selected"
        class="options-list"
      >
        <ElCheckbox
          v-for="reason of recipients"
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
@import "@/app/styles/_vars";

.options-list {
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
  &:deep {
    .el-checkbox__label {
      white-space: wrap;
    }
  }
}
</style>
