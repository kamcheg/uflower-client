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

            <NuxtLink to="/favorite">
                <ElButton :icon="StarFilled" circle size="large" />
            </NuxtLink>
            <NuxtLink to="/cart" style="margin-left: 12px;">
                <ElButton :icon="ShoppingCart" circle size="large" />
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped lang="scss">

.header {
    border-bottom: 1px solid #eee;
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
            display: flex;
            flex-direction: column;
            align-items: center;

            .number {
                margin-bottom: 4px;
            }
        }
    }
}
</style>
