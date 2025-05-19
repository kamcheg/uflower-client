<script setup lang="ts">
import { ElMessage } from 'element-plus'
import axios from "axios";
import { useCartStore } from "~/entities/cart";
import { useVuelidate } from '@vuelidate/core'
import { vMaska } from "maska/vue"
import { phoneValidator } from "~/shared/lib/validate/validators";
import { validationErrors } from "~/shared/lib/validate/errors";
import { required, helpers } from '@vuelidate/validators'
import {getRawPhoneNumber, phoneMask} from "~/shared/lib/utils/phoneNormalizer";
import AddressAutocomplete from "~/shared/components/AddressAutocomplete.vue";
/* INIT */
const model = defineModel<boolean>()
const cartStore = useCartStore()

const isSmallScreen = useMediaQuery('(max-width: 576px)')

/* DATA */
const form = ref({
  name: '',
  phone: '',
  isMyOrder: false,
  taker: {
    name: '',
    phone: '',
  },
  address: '',
  comment: '',
})

/* VUELIDATE */
const v$ = useVuelidate(computed(() => {
  const result = {
    name: {
      required: helpers.withMessage(validationErrors.required, required),
    },
    phone: {
      required: helpers.withMessage(validationErrors.required, required),
      correctPhone: helpers.withMessage(validationErrors.phone, phoneValidator)
    },
    address: {
      required: helpers.withMessage(validationErrors.required, required),
    },
    taker: {
      name: {},
      phone: {}
    }
  }

  if (!form.value.isMyOrder) {
    result.taker.name = { required: helpers.withMessage(validationErrors.required, required) }
    result.taker.phone = {
      required: helpers.withMessage(validationErrors.required, required),
      correctPhone: helpers.withMessage(validationErrors.phone, phoneValidator)
    }
  }

  return result
}), form)

/* METHODS */
async function onSubmit() {
  v$.value.$touch()
  if (v$.value.$invalid) { return }

  try {
    await axios.post('/orders', {
      customerName: form.value.name,
      customerPhone: getRawPhoneNumber(form.value.phone),
      address: form.value.address,
      isDeliverToCustomer: form.value.isMyOrder,
      recipientName: form.value.taker.name,
      recipientPhone: getRawPhoneNumber(form.value.taker.phone),
      comment: form.value.comment,
      orderFlowers: cartStore.products.map(p => ({
        flowerId: p.id,
        price: p.price,
        quantity: p.quantity,
      }))
    })
    ElMessage({
      message: 'Ваш заказ оформлен!',
      type: 'success',
    })
    model.value = false
    cartStore.clear()
    v$.value.$reset()
    // form.value = JSON.parse(JSON.stringify(baseForm))
  } catch (e) {
    ElMessage({
      message: 'Произошла ошибка!',
      type: 'error',
    })
    model.value = false
  }
}

const rrr = ref('г Махачкала, ул Хашаева')
</script>

<template>
  <ElDrawer
    v-model="model"
    title="Заполните данные. Менеджер свяжется с вами для подтверждения заказа в течении 5 минут."
    :size="isSmallScreen ? '100%' : '500px'"
    direction="rtl"
  >
    <ElForm @submit.prevent>
      <ElFormItem
        label-position="top"
        label="Ваше имя"
        :error="v$.name.$errors.length ? String(v$.name.$errors[0].$message) : undefined"
      >
        <ElInput v-model="form.name" />
      </ElFormItem>

      <ElFormItem
        label-position="top"
        label="Ваш телефон"
        :error="v$.phone.$errors.length ? String(v$.phone.$errors[0].$message) : undefined"
      >
        <ElInput
          v-model="form.phone"
          v-maska="phoneMask"
        />
      </ElFormItem>

      <ElFormItem
        label-position="top"
        label="Кому доставить"
      >
        <el-radio-group v-model="form.isMyOrder" class="m-radio-group">
          <div>
            <el-radio
              :value="true"
              size="large"
              border
            >
              Доставить мне
            </el-radio>
          </div>
          <div>

            <el-radio
              :value="false"
              size="large"
              border
            >
              Доставить получателю
            </el-radio>
          </div>
        </el-radio-group>
      </ElFormItem>

      <template v-if="!form.isMyOrder">
        <ElFormItem
          label-position="top"
          label="Имя получателя"
          :error="v$.taker.name.$errors.length ? String(v$.taker.name.$errors[0].$message) : undefined"
        >
          <ElInput v-model="form.taker.name" />
        </ElFormItem>

        <ElFormItem
          label-position="top"
          label="Телефон получателя"
          :error="v$.taker.phone.$errors.length ? String(v$.taker.phone.$errors[0].$message) : undefined"
        >
          <ElInput
            v-model="form.taker.phone"
            v-maska="phoneMask"
          />
        </ElFormItem>
      </template>

      <ElFormItem
        label-position="top"
        label="Адрес доставки"
        :error="v$.address.$errors.length ? String(v$.address.$errors[0].$message) : undefined"
      >
        <AddressAutocomplete v-model="form.address" />
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
.m-radio-group {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 4px;
}
</style>
