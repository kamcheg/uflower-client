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

<style lang="scss" scoped>
.catalog {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
</style>
