import { BaseResponse } from "./base-response";
import { Product } from "./product";
import { PagingInfo } from './paging-info';

export class ProductDetails extends BaseResponse {
    productDetails: Product;
    pagingInfo: PagingInfo;
}