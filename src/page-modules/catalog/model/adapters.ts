import type {ProductListResponseDto, ProductResponseDto} from "~/page-modules/catalog/model/dtos";
import type {IProduct} from "~/entities/product";
import type {IFilters} from "~/page-modules/catalog/model/types";

export function productListAdapter(event: ProductListResponseDto): IProduct[] {
  return event.map((i): IProduct => ({
    id: i.id,
    name: i.name,
    price: i.price,
    image: i.images?.[0]
  }))
}

export function toQueryParams(filters: IFilters) {
  return filters
}
