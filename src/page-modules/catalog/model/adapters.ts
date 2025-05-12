import type {ProductListResponseDto, ProductResponseDto} from "~/page-modules/catalog/model/dtos";
import type {IProduct} from "~/entities/product";
import type {IFilters} from "~/page-modules/catalog/model/types";
import type {IPaginatedData} from "~/shared/types/common";
import {transformServerProductToClient} from "~/shared/adapters/product";

export function productListAdapter(event: ProductListResponseDto): IPaginatedData<IProduct> {
  const products = event.data.map((i): IProduct => transformServerProductToClient(i))

  return {
    pagination: {
      lastPage: event.pagination.lastPage,
      page: event.pagination.page,
      total: event.pagination.total
    },
    data: products
  }
}

export function toQueryParams(filters: IFilters) {
  return filters
}
