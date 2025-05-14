import {productListAdapter, toQueryParams} from "~/page-modules/catalog/model/adapters";
import type {IProduct} from "~/entities/product";
import type {ProductListResponseDto} from "~/page-modules/catalog/model/dtos";
import type {IFilters} from "~/page-modules/catalog/model/types";
import type {IPaginatedData, IPagination} from "~/shared/types/common";
import axios from "axios";

export async function fetchProducts(filters: IFilters, pagination: IPagination): Promise<IPaginatedData<IProduct>> {
  return axios.get<ProductListResponseDto>('/flowers', {
    params: {
      ...toQueryParams(filters),
      page: pagination.page,
      limit: pagination.limit
    }
  })
    .then(r => productListAdapter(r.data))
}
