import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    ['Brand-Slug']: 'zizi'
  },
})
