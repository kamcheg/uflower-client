<script setup lang="ts">
import { ElMessage } from 'element-plus'

/* INIT */
const model = defineModel<boolean>()

/* DATA */
const form = ref({
  name: '',
  phone: '89',
  isMyOrder: false,
  taker: {
    name: '',
    phone: '89',
  },
  address: '',
  comment: '',
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
      <p>Заполните данные. Менеджер свяжется с вами для подтверждения заказа в течении 5 минут.</p>
    </template>
    <ElForm @submit.prevent="onSubmit">
      <ElFormItem
        label-position="top"
        label="Ваше имя"
      >
        <ElInput v-model="form.name" />
      </ElFormItem>

      <ElFormItem
        label-position="top"
        label="Ваш телефон"
      >
        <ElInput v-model="form.phone" />
      </ElFormItem>

      <ElFormItem
        label-position="top"
        label="Кому доставить"
      >
        <el-radio-group v-model="form.isMyOrder">
          <el-radio
            :value="true"
            size="large"
            border
          >
            Доставить мне
          </el-radio>
          <el-radio
            :value="false"
            size="large"
            border
          >
            Доставить получателю
          </el-radio>
        </el-radio-group>
      </ElFormItem>

      <template v-if="!form.isMyOrder">
        <ElFormItem
          label-position="top"
          label="Имя получателя"
        >
          <ElInput v-model="form.taker.name" />
        </ElFormItem>

        <ElFormItem
          label-position="top"
          label="Телефон получателя"
        >
          <ElInput v-model="form.taker.phone" />
        </ElFormItem>
      </template>

      <ElFormItem
        label-position="top"
        label="Адрес доставки"
      >
        <ElInput v-model="form.address" />
      </ElFormItem>

      <ElFormItem
        label-position="top"
        label="Комментарии к заказу"
      >
        <ElInput
          v-model="form.comment"
          type="textarea"
          :rows="4"
        />
      </ElFormItem>

      <ElButton
        type="primary"
        style="width: 100%"
        @click="onSubmit"
      >
        Оформить заказ
      </ElButton>
    </ElForm>
  </ElDialog>
</template>

<style scoped lang="scss">
</style>
