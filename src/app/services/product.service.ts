import { Injectable } from '@angular/core';
import { IproductService } from '../models/iproduct-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from './../models/product'
import { Observable, of, BehaviorSubject } from 'rxjs';
import { ProductMockService } from './product-mock.service';
import { GetProductsListResponse } from '../models/get-products-list-response';
import { GetProductDetailsResponse } from '../models/get-product-details-response';
import { ProductSort } from '../models/product-sort';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IproductService {
  productMockService: ProductMockService;
  private _productSortOptions:ProductSort;
  private _productSortOptionsObservable = new BehaviorSubject(null);
  public headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) {
    if (environment.isMockingEnabled) {
      this.productMockService = new ProductMockService();
    }

  }

  AddProduct(product: Product): Observable<Product> {
    if (environment.isMockingEnabled) {
      return this.productMockService.AddProduct(product);
    } else {
      //this is dummy. This will be removed after login service integration
      product.sellerId = "1";
      return this.http.post<Product>(this.getUrl(environment.productSetting.addProductPath), product, {
        headers: this.headers
      });
    }
  }

  getProductsList(
    pageNumber: number,
    pageSize: number
  ): Observable<GetProductsListResponse> {
    if (environment.isMockingEnabled) {
      return this.productMockService.getProductsList(pageNumber, pageSize);
    } else {
      let getProductListUrl: string = this.getUrl(environment.productSetting.adsListPath) + "pageNumber=" + pageNumber + "&pagesize=" + pageSize;
      return this.http.get<GetProductsListResponse>(getProductListUrl, {
        headers: this.headers
      });
    }
  }

  getProductDetails(
    productId: string
  ): Observable<GetProductDetailsResponse> {
    if (environment.isMockingEnabled) {
      return this.productMockService.getProductDetails(productId);
    } else {
      let getProductListUrl: string = this.getUrl(environment.productSetting.adDetailsPath) + "products/" + productId;
      return this.http.get<GetProductDetailsResponse>(getProductListUrl, {
        headers: this.headers
      });
    }
  }

  setProductSortOptions(productSortOptions:ProductSort){
    this._productSortOptions = productSortOptions;
    this._productSortOptionsObservable.next(this._productSortOptions);
  }
  getProductSortOptions():Observable<ProductSort>{
    return this._productSortOptionsObservable;
  }
  private getUrl(path: string): string {
    return environment.productSetting.BaseUrl +
      environment.version +
      environment.applicationName +
      path;
  }
}
