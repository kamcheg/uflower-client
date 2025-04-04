<template>
  <span>{{ toReadableNumber(displayedNumber) }}</span>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { toReadableNumber } from '../lib/utils/toReadableNumber.js'

const props = defineProps({
  counter: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 200, // длительность анимации в мс
  },
})

const displayedNumber = ref(props.counter)

const animateNumber = () => {
  const start = performance.now()
  const from = 0
  const to = props.counter

  const step = (timestamp) => {
    const progress = Math.min((timestamp - start) / props.duration, 1)
    displayedNumber.value = Math.floor(from + (to - from) * progress)

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  animateNumber()
})

// Чтобы обновлять, если counter изменится:
watch(() => props.counter, () => {
  animateNumber()
})
</script>

<style scoped>
/* Можно добавить плавную анимацию или стили шрифта */
</style>
