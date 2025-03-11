<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import { filterInjectionKey } from '../../config'
import type { useFilter } from '../../model/composables'
import type { IRecipient } from '../../model'
import { recipients } from '~/mock'

/* INIT */
const filter = inject<ReturnType<typeof useFilter>>(filterInjectionKey)!

/* DATA */
const open = ref(false)
const selected = ref<IRecipient['id'][]>([])

/* METHODS */
function onApply() {
  filter.recipients.value = [...selected.value]
  open.value = false
}
function onReset() {
  filter.recipients.value = []
  selected.value = []
  open.value = false
}
</script>

<template>
  <ElButton
    v-bind="$attrs"
    @click="open = true"
  >
    Кому<ElIcon class="el-icon--right">
      <ArrowDown />
    </ElIcon>
  </ElButton>

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
