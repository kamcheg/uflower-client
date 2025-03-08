<script setup lang="ts">
import type {IBouquet} from "~/types/types";

defineProps<{
    data: IBouquet
}>()
</script>

<template>
    <div class="product-card">
        <div class="image-place">
            <img :src="data.image" alt="">
        </div>

        <div class="title">{{ data.name }}</div>

        <div class="price">{{ data.price }} ₽</div>
    </div>
</template>

<style scoped lang="scss">
.product-card {
    border: 1px solid red;
    .image-place {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: 250px;
        height: 250px;
        border-radius: 8px;

        img {
            display: block;
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }

    .title {
        margin-top: 16px;
    }

    .price {
        font-size: 18px;
        font-weight: 600;
        margin-top: 16px;
    }
}
</style>
