<script setup lang="ts">
import { ElMessage } from 'element-plus'
import type { IProduct } from '../../'

defineProps<{
  data: IProduct
}>()

/* INIT */
const model = defineModel<boolean>()

/* DATA */
const form = ref({
  name: '',
  phone: '89',
})

/* METHODS */
function onSubmit() {
  ElMessage({
    message: 'Ваша заявка отправлена!',
    type: 'success',
    // plain: true,
  })
  model.value = false
}
</script>

<template>
  <ElDialog
    v-model="model"
    title=""
    width="500"
  >
    <template #header>
      <p>Заполните данные. Менеджер свяжется с вами для подтверждения заказа в течении 10 минут.</p>
    </template>
    <ElForm @submit.prevent="onSubmit">
      <ElFormItem
        label-position="top"
        label="Имя"
      >
        <ElInput v-model="form.name" />
      </ElFormItem>

      <ElFormItem
        label-position="top"
        label="Номер"
      >
        <ElInput v-model="form.phone" />
      </ElFormItem>

      <ElButton
        type="primary"
        style="width: 100%"
        @click="onSubmit"
      >
        Заказать
      </ElButton>
    </ElForm>
  </ElDialog>
</template>

<style scoped lang="scss">

</style>
