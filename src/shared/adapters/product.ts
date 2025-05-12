import type {ProductResponseDto} from "~/shared/dtos/product.dto";
import type {IProduct} from "~/entities/product";

export function transformServerProductToClient(dto: ProductResponseDto): IProduct {
  return {
    id: dto.id,
    name: dto.name,
    price: dto.price,
    image: dto.images?.[0]
  }
}
