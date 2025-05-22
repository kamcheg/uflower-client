import axios from 'axios'

export default defineNuxtPlugin(() => {
  axios.defaults.baseURL = useRuntimeConfig().public.baseUrl
  axios.defaults.headers['w-client-host'] = '' + useNuxtApp().ssrContext?.event?.req?.headers?.host
})
