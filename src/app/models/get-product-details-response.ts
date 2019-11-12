import { BaseResponse } from "./base-response";
import { Product } from "./product";
import {Seller}  from "./seller";

export class GetProductDetailsResponse extends BaseResponse {
    public product: Product = new Product();
    public seller: Seller = new Seller();
}
