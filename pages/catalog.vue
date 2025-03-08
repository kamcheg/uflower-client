<script setup lang="ts">
import {products} from "~/mock";
</script>

<template>
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
}
</style>
