<script setup lang="ts">
import {ArrowDown} from "@element-plus/icons-vue";
import {ElButton, ElDrawer, ElIcon, ElCheckbox, ElCheckboxGroup} from "element-plus";
import {flowerTypes} from "~/mock";
import {useFilterStore} from "~/stores/useFilterStore";
import type {IFlowerType} from "~/types/types";


const filterStore = useFilterStore()

/* DATA */
const open = ref(false)
const selected = ref<IFlowerType['id'][]>([])

/* METHODS */
function onApply() {
    filterStore.composition = [...selected.value]
    open.value = false
}
function onReset() {
    filterStore.composition = []
    selected.value = []
    open.value = false
}
</script>

<template>
    <ElButton v-bind="$attrs" @click="open = true">
        Цветы<ElIcon class="el-icon--right"><ArrowDown /></ElIcon>
    </ElButton>

    <ClientOnly>
        <ElDrawer
            v-model="open"
            title="Фильтр: цветы"
            size="400px"
            direction="btt"
        >
            <ElCheckboxGroup class="flower-types" v-model="selected">
                <ElCheckbox
                    v-for="type of flowerTypes"
                    :key="type.id"
                    :label="type.name"
                    :value="type.id"
                />
            </ElCheckboxGroup>

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
.flower-types {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
</style>
