import axios from 'axios'

export default defineNuxtPlugin(() => {
  axios.defaults.baseURL = useRuntimeConfig().public.baseUrl
  axios.defaults.headers['w-client-host'] = window.location.hostname
})
