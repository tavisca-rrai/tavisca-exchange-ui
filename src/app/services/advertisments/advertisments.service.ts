import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdvertismentsService {

  constructor(private httpClient: HttpClient) { }

  public getAdvertismentsList() {
    return this.httpClient.get(environment.adsListApiUrl);
  }

  public getAdvertismentDetails() {
    return this.httpClient.get(environment.adDetailsApiUrl);
  }

}