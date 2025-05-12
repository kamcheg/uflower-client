import {productListAdapter, toQueryParams} from "~/page-modules/catalog/model/adapters";
import type {IProduct} from "~/entities/product";
import type {ProductListResponseDto} from "~/page-modules/catalog/model/dtos";
import {apiInstance} from "~/shared/lib/axios";
import type {IFilters} from "~/page-modules/catalog/model/types";
import type {IPaginatedData, IPagination} from "~/shared/types/common";

export async function fetchProducts(filters: IFilters, pagination: IPagination): Promise<IPaginatedData<IProduct>> {
  return apiInstance.get<ProductListResponseDto>('/flowers', {
    params: {
      ...toQueryParams(filters),
      page: pagination.page,
      limit: pagination.limit
    }
  })
    .then(r => productListAdapter(r.data))
}
