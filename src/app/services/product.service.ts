import { Injectable } from '@angular/core';
import { IProductService } from '../models/i-product-service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Seller } from './../models/seller';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { ProductMockService } from './product-mock.service';
import { GetProductsListResponse } from '../models/get-products-list-response';
import { GetProductDetailsResponse } from '../models/get-product-details-response';
import { Product } from './../models/product'
import { ProductSort } from '../models/product-sort';
import { catchError, retry } from 'rxjs/operators';
import { ErrorResponse } from '../models/error-response'

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IProductService {
  private _productSource: Product;
  _error: ErrorResponse;
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
  getProductObj() {
    return this._productSource;
  }
  sendProductObj(product: Product) {
    this._productSource = product;
  }
  sendErrorObj(errorresponse: ErrorResponse) {
    this._error = errorresponse;
  }
  getErrorObj(): Observable<ErrorResponse> {
    return of(this._error);
  }
  AddProduct(product: Product): Observable<Product> {
    if (environment.isMockingEnabled) {
      return this.productMockService.AddProduct(product);
    }
    else {
      //this is dummy. This will be removed after login service integration
      product.sellerId = "1";
      return this.http.post<Product>(this.getUrl(environment.productSetting.addProductPath), product, {
        headers: this.headers
      });
    }
  }

  GetPreview(product: Product): GetProductDetailsResponse {
    if (product != null) {
      if (environment.isMockingEnabled) {
        return this.productMockService.GetMockPreview(product);
      }
      else {
        return this.GetApiPreview(product);
      }
    }
    else
      return null;
  }

  GetApiPreview(product: Product): GetProductDetailsResponse {
    let sellerObj = new Seller();
    let productpreviewObj = new GetProductDetailsResponse();
    productpreviewObj.seller = sellerObj;
    productpreviewObj.product = product;
    return productpreviewObj;
  }

  getProductsList(
    pageNumber: number,
    pageSize: number
  ): Observable<GetProductsListResponse> {
    if (environment.isMockingEnabled) {
      return this.productMockService.getProductsList(pageNumber, pageSize);
    } else {
      let getProductListUrl: string = this.getUrl(environment.productSetting.adsListPath) + "?pageNumber=" + pageNumber + "&pagesize=" + pageSize;
      return this.http.get<GetProductsListResponse>(getProductListUrl, {
        headers: this.headers
      }).pipe(
        retry(1),
        catchError(this.errorHandler)
      );
    }
  }

  getProductDetails(
    productId: string
  ): Observable<GetProductDetailsResponse> {
    if (environment.isMockingEnabled) {
      return this.productMockService.getProductDetails(productId);
    } else {
      let getProductListUrl: string = this.getUrl("/") + "products/" + productId;
      return this.http.get<GetProductDetailsResponse>(getProductListUrl, {
        headers: this.headers
      }).pipe(retry(1), catchError(this.errorHandler));
    }
  }
  errorHandler(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
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
