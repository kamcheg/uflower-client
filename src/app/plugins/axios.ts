import axios from 'axios'

export default defineNuxtPlugin(() => {
  axios.defaults.baseURL = useRuntimeConfig().public.baseUrl
  axios.defaults.headers['Brand-Slug'] = useRuntimeConfig().public.brandSlug as string
})
