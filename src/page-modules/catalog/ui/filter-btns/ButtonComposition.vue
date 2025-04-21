<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import { filterInjectionKey } from '../../config'
import type { useFilter } from '../../model/composables'
import type { IFlowerType } from '../../model'
import {apiInstance} from "~/shared/lib/axios";

// region DEFINES
const emit = defineEmits<{
  (name: 'apply'): void
}>()
// endregion DEFINES

// region FETCH
onMounted(fetchItems)
// endregion FETCH

/* INIT */
const filter = inject<ReturnType<typeof useFilter>>(filterInjectionKey)!

/* DATA */
const open = ref(false)
const selected = ref<IFlowerType['id'][]>([])
const flowerTypes = ref<IFlowerType[]>([])

/* METHODS */
function onApply() {
  filter.composition.value = [...selected.value]
  open.value = false
  emit('apply')
}
function onReset() {
  filter.composition.value = []
  selected.value = []
  open.value = false
}

async function fetchItems() {
  try {
    const res = await apiInstance.get<{items: {id: number, name: string}[]}>('/filters/flower-types?page=1&pageSize=1000')
    flowerTypes.value = res.data.items || []
  } catch (e) {
    // TODO err
  }
}
</script>

<template>
  <ElBadge
    v-bind="$attrs"
    :is-dot="!!filter.composition.value.length"
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
          :label="type.name"
          :value="type.id"
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
.flower-types {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
</style>
