import { Injectable } from '@angular/core';
import { IproductService } from '../models/iproduct-service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from './../models/product'
import { Observable, of ,throwError} from 'rxjs';
import { ProductMockService } from './product-mock.service';
import { GetProductsListResponse } from '../models/get-products-list-response';
import { GetProductDetailsResponse } from '../models/get-product-details-response';
import { Preview } from '../models/preview';
import {catchError,retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IproductService {
  //_productSource = new Subject();
  _productSource : Product;
 // product$ = this._productSource.asObservable(); 

  productMockService: ProductMockService;
  public headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) {
    if (environment.isMockingEnabled) {
      this.productMockService = new ProductMockService();
    }

  }
  getProductObj():Observable<Product>
  {
    return of(this._productSource);
  }
  sendProductObj(product: Product)
  {
     this._productSource = product;
  }

  AddProduct(product: Product): Observable<Product> {
    if (environment.isMockingEnabled) {
      return this.productMockService.AddProduct(product);
    } else {
      return this.http.post<Product>(this.getUrl(environment.productSetting.addProductPath), product, {
        headers: this.headers
      });
    }
  }

  GetPreview(product:Product):Preview
  {
    if(environment.isPreviewEnabled)
    {
      return this.productMockService.GetPreview(product);
    }
    else
    {
      
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
      }).pipe(retry(1),catchError(this.errorHandler));;
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
      }).pipe(retry(1),catchError(this.errorHandler));
    }
  }
  errorHandler(error : HttpErrorResponse)
  {
    return Observable.throw(error.message || "Server  Error");
  }
  private getUrl(path: string): string {
    return
    environment.productSetting.BaseUrl +
      environment.version +
      environment.applicationName +
      path;
  }
}
