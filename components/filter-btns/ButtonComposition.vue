<script setup lang="ts">
import {ArrowDown} from "@element-plus/icons-vue";
import {ElButton, ElDrawer, ElIcon, ElCheckbox} from "element-plus";
import {flowerTypes} from "~/mock";

const open = ref(false)
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
            <div class="flower-types">
                <ElCheckbox
                    v-for="type of flowerTypes"
                    :key="type.id"
                    :label="type.name"
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
.flower-types {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
</style>
