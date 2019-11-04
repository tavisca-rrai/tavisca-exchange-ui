import { BaseResponse } from "./base-response";
import { Product } from "./product";

export class ProductDetails extends BaseResponse {
    public product: Product;
    public title: string;
    public location: string;
    public postdate: string;
    public sellername: string;
    public sellerduartion: string;
}