import type {ProductListResponseDto, ProductResponseDto} from "~/page-modules/catalog/model/dtos";
import type {IProduct} from "~/entities/product";

export function productListAdapter(event: ProductListResponseDto): IProduct[] {
  return event.map((i): IProduct => ({
    id: i.id,
    name: i.name,
    price: i.price,
    image: i.images?.[0]
  }))
}
