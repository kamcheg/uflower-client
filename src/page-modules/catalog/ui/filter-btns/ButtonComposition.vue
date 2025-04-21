<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import { filterInjectionKey } from '../../config'
import type { useFilter } from '../../model/composables'
import type { IFlowerType } from '../../model'
import { apiInstance } from "~/shared/lib/axios";

// region DEFINES
const emit = defineEmits<{
  (name: 'apply'): void
}>()
// endregion DEFINES

/* INIT */
const filter = inject<ReturnType<typeof useFilter>>(filterInjectionKey)!

// region FETCH
const {data: flowerTypes, error} = useAsyncData<IFlowerType[]>('flowerTypes', fetchItems, {
  server: false
})
// endregion FETCH

/* DATA */
const open = ref(false)
const selected = ref<IFlowerType['id'][]>([])

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
  type TDto = { items: {id: number, name: string}[] }

  return await apiInstance.get<TDto>('/filters/flower-types?page=1&pageSize=1000')
    .then(r=> r.data.items || [])
}
</script>

<template>
  <template v-if="!error">
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
</template>

<style scoped lang="scss">
.flower-types {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
</style>
