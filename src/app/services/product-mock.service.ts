import { Injectable } from '@angular/core';
import { IproductService } from '../models/iproduct-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from './../models/product'
import { Response } from 'selenium-webdriver/http';
import { Observable, of } from 'rxjs';

export class ProductMockService implements IproductService {

  constructor() { }

  AddProduct(product: Product): Observable<Product> {
    product.id = "P123";
    product.status = "Active";

    product.postDate = "2019-09-01";
    product.expirationDate = "2019-09-01";
    product.purchaseDate = "2019-09-01";
    
    // set other details coming from web
    return of(product);
  }
}
