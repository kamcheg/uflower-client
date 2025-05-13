<script setup lang="ts">
import { ElMessage } from 'element-plus'
import {apiInstance} from "~/shared/lib/axios";
import {useCartStore} from "~/entities/cart";

/* INIT */
const model = defineModel<boolean>()

const cartStore = useCartStore()

/* DATA */
const form = ref({
  name: 'Kamil',
  phone: '89965110376',
  isMyOrder: false,
  taker: {
    name: 'anna',
    phone: '899834058',
  },
  address: 'makhachkala',
  comment: 'none',
})

/* METHODS */
async function onSubmit() {
  try {
    await apiInstance.post('/orders', {
      customerName: form.value.name,
      customerPhone: form.value.phone,
      address: form.value.address,
      isDeliverToCustomer: form.value.isMyOrder,
      recipientName: form.value.taker.name,
      recipientPhone: form.value.taker.phone,
      comment: form.value.comment,
      orderFlowers: cartStore.products.map(p => ({
        flowerId: p.id,
        price: p.price,
        quantity: p.quantity,
      }))
    })
    ElMessage({
      message: 'Ваша заявка отправлена!',
      type: 'success',
    })
    model.value = false
    cartStore.clear()
  } catch (e) {
    ElMessage({
      message: 'Произошла ошибка!',
      type: 'error',
    })
    model.value = false
  }
}
</script>

<template>
  <ElDrawer
    v-model="model"
    title="Заполните данные. Менеджер свяжется с вами для подтверждения заказа в течении 5 минут."
    size="500px"
    direction="rtl"
  >
    <ElForm @submit.prevent>
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
    </ElForm>

    <template #footer>
      <ElButton
        type="primary"
        @click="onSubmit"
      >
        Оформить заказ
      </ElButton>
    </template>
  </ElDrawer>
</template>

<style scoped lang="scss">
</style>
