<script setup lang="ts">
import TemplateCatalog from '~/pages/index/ui/TemplateCatalog.vue'
import { ProductCard } from '~/entities/product'
import { products } from '~/mock'
</script>

<template>
  <div class="page-home">
    <TemplateCatalog title="Собрали сегодня">
      <ProductCard
        v-for="p of products.slice(2, 4)"
        :key="p.id"
        :data="p"
      />
    </TemplateCatalog>

    <TemplateCatalog
      title="Новинки"
      style="margin-top: 48px;"
    >
      <ProductCard
        v-for="p of products.slice(14, 19)"
        :key="p.id"
        :data="p"
      />
    </TemplateCatalog>

    <!--    <TemplateCatalog -->
    <!--      title="Букеты до 10000" -->
    <!--      style="margin-top: 48px;" -->
    <!--    > -->
    <!--      <ProductCard -->
    <!--        v-for="p of products.filter(i => i.price <= 10000).slice(14, 19)" -->
    <!--        :key="p.id" -->
    <!--        :data="p" -->
    <!--      /> -->
    <!--    </TemplateCatalog> -->

    <TemplateCatalog
      title="Популярные"
      style="margin-top: 48px;"
    >
      <ProductCard
        v-for="p of products.slice(14, 19)"
        :key="p.id"
        :data="p"
      />
    </TemplateCatalog>
  </div>
</template>

<style lang="scss" scoped>
</style>
