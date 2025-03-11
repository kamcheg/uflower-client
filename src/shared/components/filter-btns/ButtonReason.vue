<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import { ElButton, ElCheckbox, ElDrawer, ElIcon, ElCheckboxGroup } from 'element-plus'
import { reasons } from '~/mock'
import type { useFilter } from '~/shared/composables/useFilter'
import type { IReason } from '~/shared/types'

/* INIT */
const filter = inject<ReturnType<typeof useFilter>>('filter')!

/* DATA */
const open = ref(false)
const selected = ref<IReason['id'][]>([])

/* METHODS */
function onApply() {
  filter.reasons.value = [...selected.value]
  open.value = false
}
function onReset() {
  filter.reasons.value = []
  selected.value = []
  open.value = false
}
</script>

<template>
  <ElButton
    v-bind="$attrs"
    @click="open = true"
  >
    Повод<ElIcon class="el-icon--right">
      <ArrowDown />
    </ElIcon>
  </ElButton>

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
    width: 400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 12px;

    &__item {
        cursor: pointer;
    }
}
</style>
