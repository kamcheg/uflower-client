<script setup lang="ts">
import {ElButton, ElIcon} from "element-plus";
import {ArrowDown, DCaret} from "@element-plus/icons-vue";
import {products} from "~/mock";
import ButtonComposition from "~/components/filter-btns/ButtonComposition.vue";
import ButtonPrice from "~/components/filter-btns/ButtonPrice.vue";
import ButtonReason from "~/components/filter-btns/ButtonReason.vue";
import ButtonRecipient from "~/components/filter-btns/ButtonRecipient.vue";
import ButtonSize from "~/components/filter-btns/ButtonSize.vue";
</script>

<template>
    <div>
        <ElButton>
            <ElIcon class="el-icon--left"><DCaret /></ElIcon>Новинки
        </ElButton>

        <ButtonComposition />

        <ButtonPrice />

        <ButtonReason />

        <ButtonRecipient />

        <ButtonSize />
    </div>

    <div class="catalog">
        <ProductCard
            v-for="i of products"
            :key="i.id"
            :data="i"
        />
    </div>
</template>

<style scoped lang="scss">
.catalog {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
}
</style>
