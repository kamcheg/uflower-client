import type {IPaginatedDataResponseDto} from "~/shared/types/common";
import type {ProductResponseDto} from "~/shared/dtos/product.dto";

export type {ProductResponseDto} from "~/shared/dtos/product.dto";

export type ProductListResponseDto = IPaginatedDataResponseDto<ProductResponseDto>
