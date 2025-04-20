import type {IPaginatedData} from "~/shared/types";
import type {IProductListDto} from "~/pages/catalog/model/dtos";
import type {IProduct} from "~/entities/product";

export function productListAdapter(event: IProductListDto): IPaginatedData<IProduct> {
  return {
    pagination: {
      lastPage: 3,
      page: 1,
      perPage: 12,
      total: 36
    },
    data: event.items.map((i): IProduct => ({
      id: i.id,
      name: i.name,
      price: i.price,
      image: i.images?.[0]?.url || ''
    }))
  }
}
