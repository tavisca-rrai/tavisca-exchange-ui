import { BaseResponse } from "./base-response";
import { Product } from "./product";
import { PagingInfo } from './paging-info';

export class GetProductsListResponse extends BaseResponse {
    products: Product[];
    pagingInfo: PagingInfo
}
