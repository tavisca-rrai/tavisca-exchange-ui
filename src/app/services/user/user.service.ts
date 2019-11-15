import { UserProfile } from './../../models/user/user-profile';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserMockService } from './user-mock.service';
import { GetUserProfileResponse } from 'src/app/models/user/get-user-profile-response';
import { Observable, BehaviorSubject } from 'rxjs';
import { IUserService } from 'src/app/models/i-user-service';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})

export class UserService implements IUserService {
  userId: string;
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
    this.userId = "777888666";
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
      return this.userProfile;
    }
  }

  getUrl(path: string): string {
    return environment.userSetting.baseUrl +
      environment.version +
      environment.applicationName +
      path;
  }

}
