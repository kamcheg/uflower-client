<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import { filterInjectionKey } from '../../config'
import type { useFilter } from '../../model/composables'
import type { ISize } from '../../model'
import { sizes } from '~/mock'

/* INIT */
const filter = inject<ReturnType<typeof useFilter>>(filterInjectionKey)!

/* DATA */
const open = ref(false)
const selected = ref<ISize['id'][]>([])

/* METHODS */
function onApply() {
  filter.sizes.value = [...selected.value]
  open.value = false
}

function onReset() {
  filter.sizes.value = []
  selected.value = []
  open.value = false
}

function onCheck(id: ISize['id']) {
  if (selected.value.includes(id)) {
    selected.value = selected.value.filter(i => i !== id)
  }
  else {
    selected.value.push(id)
  }
}
</script>

<template>
  <ElBadge :is-dot="!!filter.sizes.value.length">
    <ElButton
      v-bind="$attrs"
      @click="open = true"
    >
      Размер<ElIcon class="el-icon--right">
        <ArrowDown />
      </ElIcon>
    </ElButton>
  </ElBadge>

  <ClientOnly>
    <ElDrawer
      v-model="open"
      title="Фильтр: размер"
      size="400px"
      direction="btt"
    >
      <div class="options-list">
        <div
          v-for="size of sizes"
          :key="size.id"
          class="option-item"
          :class="{
            'option-item_active': selected.includes(size.id),
          }"
          @click="onCheck(size.id)"
        >
          <img
            :src="size.image"
            class="option-item__image"
          >
          <div class="option-item__label">
            {{ size.name }}
          </div>
        </div>
      </div>

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
    width: 700px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    .option-item {
        cursor: pointer;
        border: 1px solid #eee;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;

        &_active {
            border-color: red;
        }

        &__label {
            margin-left: 12px;
        }
    }
}
</style>
