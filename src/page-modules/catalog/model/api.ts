import axios from "axios";
import type {IPaginatedData} from "~/shared/types";
import {productListAdapter} from "~/page-modules/catalog/model/adapters";
import type {IProduct} from "~/entities/product";
import type {IProductListDto} from "~/page-modules/catalog/model/dtos";

const urls = {
  ddd: 'https://kamcheg-flows-store-backend-04ed.twc1.net/api/v1/products?page=1&pageSize=100'
}

export async function fetchProducts(): Promise<IPaginatedData<IProduct>> {
  return axios.get<IProductListDto>(urls.ddd)
    .then(r => productListAdapter(r.data))
}
