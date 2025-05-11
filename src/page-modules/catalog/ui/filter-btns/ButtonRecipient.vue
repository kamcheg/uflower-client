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
    //width: 400px;
    //margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 2px;

    &__item {
        cursor: pointer;
    }
}
</style>
