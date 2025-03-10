<script setup lang="ts">
import {ArrowDown} from "@element-plus/icons-vue";
import {ElButton, ElDrawer, ElIcon} from "element-plus";
import {sizes} from "~/mock";

const open = ref(false)
</script>

<template>
    <ElButton @click="open = true">
        Размер<ElIcon class="el-icon--right"><ArrowDown /></ElIcon>
    </ElButton>

    <ClientOnly>
        <ElDrawer
            v-model="open"
            title="Фильтр: размер"
            size="400px"
            direction="btt"
        >
            <div class="options-list">
                <div
                    v-for="reason of sizes"
                    :key="reason.id"
                    class="option-item"
                >
                    <img :src="reason.image" class="option-item__image">
                    <div class="option-item__label">{{ reason.name }}</div>
                </div>
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

        &__label {
            margin-left: 12px;
        }
    }
}
</style>
