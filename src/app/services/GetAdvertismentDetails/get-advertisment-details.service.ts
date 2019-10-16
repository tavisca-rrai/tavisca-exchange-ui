import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAdvertismentDetailsService {

  private AD_DETAILS_REST_API_SERVER = "https://demo3944353.mockable.io/get-advertisment-details";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get(this.AD_DETAILS_REST_API_SERVER);
  }

}
