<script setup lang="ts">
// import {ElButton, ElIcon} from "element-plus";
// import {DCaret} from "@element-plus/icons-vue";
import ButtonComposition from "~/components/filter-btns/ButtonComposition.vue";
import ButtonPrice from "~/components/filter-btns/ButtonPrice.vue";
import ButtonReason from "~/components/filter-btns/ButtonReason.vue";
import ButtonRecipient from "~/components/filter-btns/ButtonRecipient.vue";
import ButtonSize from "~/components/filter-btns/ButtonSize.vue";
import {useFilterStore} from "~/stores/useFilterStore";
import type {IBouquet} from "~/types/types";
import axios from "axios";

/* INIT */
const filterStore = useFilterStore()

/* DATA */
const products = ref<IBouquet[]>([])

onMounted(() => {
    fetchProducts()
})

/* METHODS */
async function fetchProducts() {
    try {
        products.value = await axios.get<IBouquet[]>('http://localhost:4000/products', {
            params: {
                price_gte: filterStore.price.min || undefined,
                price_lte: filterStore.price.max || undefined,
            }
        })
            .then(e => e.data)
    } catch (e) {
        console.log('err')
    }
}
</script>

<template>
    <div>
<!--        <ElButton>-->
<!--            <ElIcon class="el-icon&#45;&#45;left"><DCaret /></ElIcon>Новинки-->
<!--        </ElButton>-->

        <ButtonComposition
            style="margin-right: 10px;"
            @apply="fetchProducts"
        />

        <ButtonPrice
            style="margin-right: 10px;"
            @apply="fetchProducts"
        />

        <ButtonReason
            style="margin-right: 10px;"
            @apply="fetchProducts"
        />

        <ButtonRecipient
            style="margin-right: 10px;"
            @apply="fetchProducts"
        />

        <ButtonSize
            style="margin-right: 10px;"
            @apply="fetchProducts"
        />
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
