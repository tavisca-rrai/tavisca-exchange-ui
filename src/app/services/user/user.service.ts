import { UserProfile } from './../../models/user/user-profile';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserMockService } from './user-mock.service';
import { GetUserProfileResponse } from 'src/app/models/user/get-user-profile-response';
import { Observable, of, BehaviorSubject, } from 'rxjs';
import { IUserService } from 'src/app/models/i-user-service';
import { GetProductsListResponse } from 'src/app/models/get-products-list-response';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {
  private userProfile: UserProfile;
  private userMockService: UserMockService;
  userAdsList: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  public headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) {
    if (environment.isMockingEnabled) {
      this.userMockService = new UserMockService();
    }

  }

  getUserProfile(
    userId: string
  ): Observable<GetUserProfileResponse> {
    if (environment.isMockingEnabled) {
      return this.userMockService.getUserProfile(userId);
    } else {
      let getProductListUrl: string = this.getUrl(environment.userSetting.profile) + "/" + userId;
      return this.http.get<GetUserProfileResponse>(getProductListUrl, {
        headers: this.headers
      });
    }
  }

  getActiveUserProducts(
    userId: string
  ): Observable<GetProductsListResponse> {
    // if (environment.isMockingEnabled) {
    //   return this.userMockService.getActiveUserProducts(userId);
    // } else {
    //   let getProductListUrl: string = this.getUrl(environment.userSetting.profile) + userId + environment.userSetting.activeAds;
    //   return this.http.get<GetProductsListResponse>(getProductListUrl, {
    //     headers: this.headers
    //   });
    // }

    return new UserMockService().getActiveUserProducts(userId);
  }

  getInactiveUserProducts(
    userId: string
  ): Observable<GetProductsListResponse> {
    // if (environment.isMockingEnabled) {
    //   return this.userMockService.getInactiveUserProducts(userId);
    // } else {
    //   let getProductListUrl: string = this.getUrl(environment.userSetting.inactiveAds) + userId + environment.userSetting.inactiveAds;
    //   return this.http.get<GetProductsListResponse>(getProductListUrl, {
    //     headers: this.headers
    //   });
    // }
    return new UserMockService().getInactiveUserProducts(userId);
  }
  saveUserToStorage(userId: string) {
    this.userProfile = new UserProfile();
    this.userProfile.id = userId;
  }

  getUserFromStorage(): UserProfile {
    if (environment.isMockingEnabled) {
      this.userProfile = new UserProfile();
      this.userProfile.id = "777888666";
      return this.userProfile;
    }
    else {
      this.userProfile=new UserProfile();
      this.userProfile.id = "777888666";
      return this.userProfile;
    }
  }


  private getUrl(path: string): string {
    return environment.userSetting.baseUrl +
      environment.version +
      environment.applicationName +
      path;
  }

}
