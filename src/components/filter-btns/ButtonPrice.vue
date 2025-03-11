<script setup lang="ts">
import {ArrowDown} from "@element-plus/icons-vue";
import {ElButton, ElDrawer, ElIcon, ElFormItem, ElInput} from "element-plus";
import {useFilter} from "~/composables/useFilter";
import type {IPrice} from "~/types/types";

const emit = defineEmits<{
    (name: 'apply'): void
}>()

/* INIT */
const filter = inject<ReturnType<typeof useFilter>>('filter')!

/* DATA */
const current = ref<IPrice>({
    min: null,
    max: null
})
const open = ref(false)
const options: IPrice[] = [
    { min: null, max: 3000 },
    { min: 3000, max: 7000 },
    { min: 7000, max: 10000 },
    { min: 10000, max: 15000 },
    { min: 15000, max: 20000 },
    { min: 20000, max: null },
]

/* METHODS */
function onCheck(event: IPrice) {
    current.value.min = event.min
    current.value.max = event.max
}

function onApply() {
    filter.price.value = {...current.value}
    open.value = false
    emit('apply')
}
function onReset() {
    filter.price.value = {
        min: null,
        max: null
    }
    current.value = {
        min: null,
        max: null
    }
    open.value = false
    emit('apply')
}
</script>

<template>
    <ElButton v-bind="$attrs" @click="open = true">
        Цена<ElIcon class="el-icon--right"><ArrowDown /></ElIcon>
    </ElButton>

    <ClientOnly>
        <ElDrawer
            v-model="open"
            title="Фильтр: цена"
            size="400px"
            direction="btt"
        >
            <div class="options-list">
                <div
                    v-for="(opt, index) of options"
                    :key="index"
                    class="options-list__item"
                    @click="onCheck(opt)"
                >
                    <span v-if="opt.min">От {{ opt.min }}</span>
                    <span v-if="opt.max"> до {{ opt.max }}</span>
                </div>
            </div>

            <div class="price-range">
                <ElFormItem label-position="top" label="От">
                    <ElInput
                        v-model.number="current.min"
                        type="number"
                        @update:modelValue="e => current.min = e === '' ? null : +e"
                    />
                </ElFormItem>

                <ElFormItem label-position="top" label="До">
                    <ElInput
                        v-model.number="current.max"
                        type="number"
                        @update:modelValue="e => current.max = e === '' ? null : +e"
                    />
                </ElFormItem>
            </div>

            <template #footer>
                <div>
                    <ElButton @click="onReset">Очистить</ElButton>
                    <ElButton @click="onApply">Применить</ElButton>
                </div>
            </template>
        </ElDrawer>
    </ClientOnly>
</template>

<style scoped lang="scss">
.price-range {
    width: 400px;
    margin: 32px auto 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
}

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
