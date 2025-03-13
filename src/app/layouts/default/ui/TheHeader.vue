<script setup lang="ts">
import { ShoppingCart, StarFilled } from '@element-plus/icons-vue'
</script>

<template>
  <div class="header">
    <div class="left">
      <NuxtLink
        to="/"
        class="logo-place"
      >
        <img
          src="/images/logo.svg"
          alt="logo"
        >
      </NuxtLink>
    </div>

    <div class="center">
      <div class="nav">
        <ElLink
          href="/"
          class="nav__item"
        >
          Главная
        </ElLink>
        <ElLink
          href="/catalog"
          class="nav__item"
        >
          Каталог
        </ElLink>
        <ElLink
          href="/about"
          class="nav__item"
        >
          О нас
        </ElLink>
      </div>
    </div>

    <div class="right">
      <div class="phone">
        <div class="number">
          +7(999)-666-88-77
        </div>
        <div class="schedule">
          Ежедневно с 09:00 до 21:00
        </div>
      </div>

      <NuxtLink to="/favorite">
        <ElButton
          :icon="StarFilled"
          circle
          size="large"
        />
      </NuxtLink>
      <NuxtLink
        to="/cart"
        style="margin-left: 12px;"
      >
        <ElButton
          :icon="ShoppingCart"
          circle
          size="large"
        />
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
        font-weight: 500;

        &:not(:first-child) {
          margin-left: 20px;
        }
      }
    }
  }

  .left {
    .logo-place {
      display: block;
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

        .number {}

        .schedule {
          margin-bottom: 2px;
          font-size: 10px;
          color: #8f8f8f;
        }
      }
    }
}
</style>
