<script setup lang="ts">
import Header from "./Header.vue";
</script>

<template>
    <div class="default-layout">
        <Header />
        <div class="default-layout__content">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.default-layout {
    &__content {
        padding: 24px;
    }
}
</style>
