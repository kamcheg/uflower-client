<script setup lang="ts">

</script>

<template>
  <div class="loader-wrapper">
    <div class="loader" />
  </div>
</template>

<style scoped lang="scss">
.loader-wrapper {
  position: absolute;
  z-index: 9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;

  /* HTML: <div class="loader"></div> */
  .loader {
    width: 80px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 6px solid;
    border-color: #409eff transparent;
    animation: l1 1s infinite;
  }
  @keyframes l1 {to{transform: rotate(.5turn)}}
}
</style>
