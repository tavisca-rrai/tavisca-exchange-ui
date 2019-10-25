import { Observable } from "rxjs";
import { GetProductDetailsResponse } from './get-product-details-response';
import { GetProductsListResponse } from './get-products-list-response';

export interface IProductsService {
    getProductDetails(
        productId: string
    ): Observable<GetProductDetailsResponse>;
    getProductsList(
        pageNumber: number,
        pageSize: number
    ): Observable<GetProductsListResponse>;
}
