import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProductsService } from "../../models/i-products-service";
import { Observable, of } from "rxjs";
import { GetProductDetailsResponse } from "src/app/models/get-product-details-response";
import { GetProductsListResponse } from "src/app/models/get-products-list-response";
import { environment } from "src/environments/environment";
import { ProductsMockService } from './products-mock.service';

@Injectable({
  providedIn: 'root'
})

export class ProductsService implements IProductsService {

  constructor(private httpClient: HttpClient) { }

  getProductsList(
    pageNumber: number,
    pageSize: number
  ): Observable<GetProductsListResponse> {
    if (environment.isMockingEnabled) {
      return new ProductsMockService().getProductsList(pageNumber, pageSize);
    } else {
      return of(new GetProductsListResponse());
    }
  }

  getProductDetails(
    productId: string
  ): Observable<GetProductDetailsResponse> {
    if (environment.isMockingEnabled) {
      return new ProductsMockService().getProductDetails(productId);
    } else {
      return of(new GetProductDetailsResponse());
    }
  }

}