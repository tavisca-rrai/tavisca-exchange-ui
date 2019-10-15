import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAdvertismentsListService {

  private ADS_LIST_REST_API_SERVER = "https://demo4724356.mockable.io/get-advertisments-list";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get(this.ADS_LIST_REST_API_SERVER);
  }

}
