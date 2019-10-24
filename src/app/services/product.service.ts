import { Injectable } from '@angular/core';
import { IproductService } from '../models/iproduct-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from './../models/product'
import { Response } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { ProductMockService } from './product-mock.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService implements IproductService {
  productMockService: ProductMockService;
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
      return this.http.post<Product>(this.getUrl(environment.productSetting.addProductPath), product, {
        headers: this.headers
      });
    }
  }

  private getUrl(path: string): string {
    return
    environment.productSetting.BaseUrl +
      environment.version +
      environment.applicationName +
      path;
  }
}
