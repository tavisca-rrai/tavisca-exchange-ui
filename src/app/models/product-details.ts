import { BaseResponse } from "./base-response";
import { Product } from "./product";
import {Seller}  from "./seller";

export class ProductDetails extends BaseResponse {
    public product: Product;
    public seller: Seller;
}