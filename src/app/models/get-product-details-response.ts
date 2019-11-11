import { BaseResponse } from "./base-response";
import { ProductDetails } from "./product-details";
import { Product } from './product';
import { Seller } from './seller';

export class GetProductDetailsResponse extends BaseResponse {
    public product: Product;
    public seller: Seller;
}
