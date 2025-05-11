import {productListAdapter} from "~/page-modules/catalog/model/adapters";
import type {IProduct} from "~/entities/product";
import type {ProductListResponseDto} from "~/page-modules/catalog/model/dtos";
import {apiInstance} from "~/shared/lib/axios";

export async function fetchProducts(): Promise<IProduct[]> {
  return apiInstance.get<ProductListResponseDto>('/flowers')
    .then(r => productListAdapter(r.data))
}
