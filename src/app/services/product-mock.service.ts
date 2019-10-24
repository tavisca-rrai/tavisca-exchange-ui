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
    return of(product);
  }
}
