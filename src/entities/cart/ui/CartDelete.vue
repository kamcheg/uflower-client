<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
}>(), {
  title: 'Удалить',
})
</script>

<template>
  <div
    class="delete"
  >
    <b>&#10005;</b> <span>{{ title }}</span>
  </div>
</template>

<style scoped lang="scss">
.delete {
  margin-top: auto;
  font-size: 13px;
  cursor: pointer;
  color: #888383;

  b {
    font-size: 1.2em;
  }

  span {
    padding-left: 4px;
  }
}
</style>
