import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  public getProductsList() {
    return this.httpClient.get(environment.adsListApiUrl);
  }

  public getProductsDetails() {
    return this.httpClient.get(environment.adDetailsApiUrl);
  }

}