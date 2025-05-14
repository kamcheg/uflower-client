import axios from 'axios'
import qs from 'qs';

export const apiInstance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    ['Brand-Slug']: 'zizi'
  },
  paramsSerializer: params =>
    qs.stringify(params, { arrayFormat: 'repeat' })
})
