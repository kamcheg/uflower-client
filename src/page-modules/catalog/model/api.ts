import type {IPaginatedData} from "~/shared/types";
import {productListAdapter} from "~/page-modules/catalog/model/adapters";
import type {IProduct} from "~/entities/product";
import type {IProductListDto} from "~/page-modules/catalog/model/dtos";
import {apiInstance} from "~/shared/lib/axios";

const urls = {
  products: '/products?page=1&pageSize=100'
}

export async function fetchProducts(): Promise<IPaginatedData<IProduct>> {
  return apiInstance.get<IProductListDto>(urls.products)
    .then(r => productListAdapter(r.data))
}
