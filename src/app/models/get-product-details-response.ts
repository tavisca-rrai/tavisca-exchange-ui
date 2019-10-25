import { BaseResponse } from "./base-response";
import { ProductDetails } from "./product-details";

export class GetProductDetailsResponse extends BaseResponse {
    productDetails: ProductDetails;
}
