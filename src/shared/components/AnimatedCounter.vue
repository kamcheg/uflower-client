<template>
  <div class="text-4xl font-bold">
    {{ toReadableNumber(displayedNumber) }}
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { toReadableNumber } from '~/shared/lib/utils/toReadableNumber.js'

const props = defineProps({
  to: {
    type: Number,
    required: true,
  },
  from: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 200, // длительность анимации в мс
  },
})

const displayedNumber = ref(props.from) // начальное значение из пропса

const animateNumber = () => {
  const start = performance.now()
  const from = props.from
  const to = props.to

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

// Чтобы обновлять, если targetNumber изменится:
watch(() => props.to, () => {
  animateNumber()
})
</script>

<style scoped>
/* Можно добавить плавную анимацию или стили шрифта */
</style>
