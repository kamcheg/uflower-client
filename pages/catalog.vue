<script setup lang="ts">
import {ElButton, ElIcon, ElDrawer} from "element-plus";
import {ArrowDown, DCaret} from "@element-plus/icons-vue";
import {products} from "~/mock";
import ButtonComposition from "~/components/filter-btns/ButtonComposition.vue";
</script>

<template>
    <div>
        <ElButton>
            <ElIcon class="el-icon--left"><DCaret /></ElIcon>Новинки
        </ElButton>

        <ButtonComposition />

        <ElButton>
            Цена<ElIcon class="el-icon--right"><ArrowDown /></ElIcon>
        </ElButton>

        <ElButton>
            Повод<ElIcon class="el-icon--right"><ArrowDown /></ElIcon>
        </ElButton>

        <ElButton>
            Кому<ElIcon class="el-icon--right"><ArrowDown /></ElIcon>
        </ElButton>

        <ElButton>
            Размер<ElIcon class="el-icon--right"><ArrowDown /></ElIcon>
        </ElButton>
    </div>

    <div class="catalog">
        <ProductCard
            v-for="i of products"
            :key="i.id"
            :data="i"
        />
    </div>

    <ElDrawer
        :modelValue="false"
        title="I am the title"
        direction="btt"
    >
        <span>Hi, there!</span>
    </ElDrawer>
</template>

<style scoped lang="scss">
.catalog {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
}
</style>
