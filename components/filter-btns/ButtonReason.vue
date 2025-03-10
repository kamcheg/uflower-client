<script setup lang="ts">
import {ArrowDown} from "@element-plus/icons-vue";
import {ElButton, ElCheckbox, ElDrawer, ElIcon} from "element-plus";
import {reasons} from "~/mock";

const open = ref(false)
</script>

<template>
    <ElButton v-bind="$attrs" @click="open = true">
        Повод<ElIcon class="el-icon--right"><ArrowDown /></ElIcon>
    </ElButton>

    <ClientOnly>
        <ElDrawer
            v-model="open"
            title="Фильтр: цена"
            size="400px"
            direction="btt"
        >
            <div class="options-list">
                <ElCheckbox
                    v-for="reason of reasons"
                    :key="reason.id"
                    :label="reason.name"
                />
            </div>

            <template #footer>
                <div>
                    <ElButton>Очистить</ElButton>
                    <ElButton>Применить</ElButton>
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
