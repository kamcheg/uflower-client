<script setup lang="ts">
// import {ElButton, ElIcon} from "element-plus";
// import {DCaret} from "@element-plus/icons-vue";
import {products} from "~/mock";
import ButtonComposition from "~/components/filter-btns/ButtonComposition.vue";
import ButtonPrice from "~/components/filter-btns/ButtonPrice.vue";
import ButtonReason from "~/components/filter-btns/ButtonReason.vue";
import ButtonRecipient from "~/components/filter-btns/ButtonRecipient.vue";
import ButtonSize from "~/components/filter-btns/ButtonSize.vue";
import {useFilterStore} from "~/stores/useFilterStore";

const filterStore = useFilterStore()
</script>

<template>
    <div>
<!--        <ElButton>-->
<!--            <ElIcon class="el-icon&#45;&#45;left"><DCaret /></ElIcon>Новинки-->
<!--        </ElButton>-->

        <ButtonComposition style="margin-right: 10px;" />

        <ButtonPrice style="margin-right: 10px;" />

        <ButtonReason style="margin-right: 10px;" />

        <ButtonRecipient style="margin-right: 10px;" />

        <ButtonSize style="margin-right: 10px;" />
    </div>

    <pre>{{filterStore.reasons}}</pre>

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
