import { UserProfile } from './../../models/user/user-profile';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserMockService } from './user-mock.service';
import { GetUserProfileResponse } from 'src/app/models/user/get-user-profile-response';
import { Observable } from 'rxjs';
import { IUserService } from 'src/app/models/i-user-service';

@Injectable({
  providedIn: 'root'
})

export class UserService implements IUserService {
  userId: string;
  private userMockService: UserMockService;
  public headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(
    private http: HttpClient
  ) {
    if (environment.isMockingEnabled) {
      this.userMockService = new UserMockService();
    }
    this.userId = this.getUserFromStorage().id;
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

  saveUserToStorage(userData: UserProfile) {
    localStorage.setItem("userInfo", JSON.stringify(userData));
  }

  getUserFromStorage(): UserProfile {
    if (environment.isMockingEnabled) {
      let userProfile = new UserProfile();
      userProfile.id = "777888666";
      return userProfile;
    }
    else {
      //as cognito is not configured on most of the laptop, we are hardcoding this value for now
      let userProfile = new UserProfile();
      userProfile.id = "777888666";
      return userProfile;
      //return JSON.parse(localStorage.getItem("userInfo"));
    }
  }

  getUrl(path: string): string {
    return environment.userSetting.baseUrl +
      environment.version +
      environment.applicationName +
      path;
  }
}
