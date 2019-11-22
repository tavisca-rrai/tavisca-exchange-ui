import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { GetUserProfileResponse } from 'src/app/models/user/get-user-profile-response';
import { UserProfile } from 'src/app/models/user/user-profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile: UserProfile;
  userId: string;
  hideMenu: boolean;
  showActiveAds: boolean;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.userId = this.userService.getUserFromStorage().id;
  }

  ngOnInit() {
    this.userService.getUserProfile(this.userId).subscribe(
      (response: GetUserProfileResponse) => {
        this.userProfile = response.userProfile;
      },
      err => {
        // TBA - error msg on ui
        console.log(err.error);
      }
    );
    if (this.router.url.includes("/active")) {
      this.showActiveAds = true;
    } else {
      this.showActiveAds = false;
    }
  }

  toggleAdsTabHighlighting() {
    this.showActiveAds = this.showActiveAds ? false : true;
  }
}
