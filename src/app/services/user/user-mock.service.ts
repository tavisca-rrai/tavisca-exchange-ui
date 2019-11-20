import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetUserProfileResponse } from 'src/app/models/user/get-user-profile-response';
import { IUserService } from 'src/app/models/i-user-service';
import { UserProfile } from 'src/app/models/user/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserMockService implements IUserService {
  private userProfile: UserProfile;
  constructor() {
    this.userProfile = new UserProfile();
    this.userProfile.id = "777888666";
  }

  getDummyUserProfile(userId): UserProfile {
    let userProfileObj = new UserProfile();
    userProfileObj.id = userId;
    userProfileObj.firstName = "Nikita";
    userProfileObj.lastName = "Narkhede";
    userProfileObj.contactNumber = "8485733995";
    userProfileObj.emailId = "demo@something.com";
    userProfileObj.profileImageUrl = "https://scontent-frx5-1.cdninstagram.com/vp/b8ce57551b48edfec3b1e644e9a47f9b/5E4F1F60/t51.2885-19/11821175_1046879962002756_496959586_a.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com";
    return userProfileObj;
  }

  getUserProfile(
    userId: string
  ): Observable<GetUserProfileResponse> {
    let getUserProfileResponse = new GetUserProfileResponse();
    getUserProfileResponse.userProfile = this.getDummyUserProfile(userId);
    return of(getUserProfileResponse);
  }
}
