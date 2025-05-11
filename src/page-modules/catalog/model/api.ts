import {productListAdapter, toQueryParams} from "~/page-modules/catalog/model/adapters";
import type {IProduct} from "~/entities/product";
import type {ProductListResponseDto} from "~/page-modules/catalog/model/dtos";
import {apiInstance} from "~/shared/lib/axios";
import type {IFilters} from "~/page-modules/catalog/model/types";

export async function fetchProducts(filters: IFilters): Promise<IProduct[]> {
  return apiInstance.get<ProductListResponseDto>('/flowers', {
    params: {
      ...toQueryParams(filters)
    }
  })
    .then(r => productListAdapter(r.data))
}
