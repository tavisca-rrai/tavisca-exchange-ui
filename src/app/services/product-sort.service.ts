import { Injectable } from '@angular/core';
import { GetProductsListResponse } from '../models/get-products-list-response';
import { ProductSort } from '../models/product-sort';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductSortService {
  
  public headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) {}

  getSortedProductsList(
    pageNumber: number,
    pageSize: number,
    productSortOptions:ProductSort
  ): Observable<GetProductsListResponse> {
  
    let getProductListUrl: string = this.getUrl(environment.productSetting.adsListPath) + "?pageNo=" + pageNumber + "&pageSize=" + pageSize;
    return this.http.post<GetProductsListResponse>(getProductListUrl, productSortOptions, {
      headers: this.headers
    });
    
  }
  
  private getUrl(path: string): string {
    return environment.productSetting.BaseUrl +
      environment.version +
      environment.applicationName +
      path;
  }
}