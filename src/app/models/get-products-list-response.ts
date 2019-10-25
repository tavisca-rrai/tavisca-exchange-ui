import { BaseResponse } from "./base-response";
import { Product } from "./product";

export class GetProductsListResponse extends BaseResponse {
    products: Product[];
}
