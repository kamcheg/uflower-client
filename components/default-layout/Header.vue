<script setup lang="ts">
import {ElButton} from 'element-plus'
import {ShoppingCart, StarFilled} from '@element-plus/icons-vue'
</script>

<template>
    <div class="header">
        <div class="left">
            <div class="logo-place">
                <img src="/images/logo.svg" alt="logo">
            </div>
        </div>

        <div class="center">
            <div class="nav">
                <NuxtLink
                    to="/"
                    class="nav__item"
                >
                    Главная
                </NuxtLink>
                <NuxtLink
                    to="/catalog"
                    class="nav__item"
                >
                    Каталог
                </NuxtLink>
                <NuxtLink
                    to="/about"
                    class="nav__item"
                >
                    О нас
                </NuxtLink>
            </div>
        </div>

        <div class="right">
            <div class="phone">
                <div class="number">+7(999)-666-88-77</div>
                <ElButton>Заказать звонок</ElButton>
            </div>
            <ElButton :icon="StarFilled" circle size="large" />
            <ElButton :icon="ShoppingCart" circle size="large" />
        </div>
    </div>
</template>

<style scoped lang="scss">

.header {
    background: #fff;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 20px;

    .center {
        .nav {
            margin-left: 120px;
            &__item {
                &:not(:first-child) {
                    margin-left: 20px;
                }
            }
        }
    }

    .right {
        margin-left: auto;
        display: flex;
        align-items: center;

        .phone {
            margin-right: 24px;
            .number {
                text-align: center;
                margin-bottom: 4px;
            }
        }
    }
}
</style>
