import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { GetUserProfileResponse } from 'src/app/models/user/get-user-profile-response';
import { UserProfile } from 'src/app/models/user/user-profile';
import { GetProductsListResponse } from 'src/app/models/get-products-list-response';

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
    private userService: UserService) {
    this.userId = userService.getUserFromStorage().id;
  }

  ngOnInit() {
    this.showActiveAds = true;
    console.log(this.userId);

    this.userService.getUserProfile(this.userId).subscribe(
      (response: GetUserProfileResponse) => {
        this.userProfile = response.userProfile;
      },
      err => {
        // TBA - error msg on ui
        console.log(err.error);
      }
    );

    this.getActiveAds();
  }

  getActiveAds() {
    this.showActiveAds = true;
    this.userService.getActiveUserProducts(this.userId).subscribe(
      (response: GetProductsListResponse) => {
        this.userService.userAdsList.next(response.products);
      },
      err => {
        // TBA - error msg on ui
        console.log(err.error);
      }
    );
  }

  getInactiveAds() {
    this.showActiveAds = false;
    this.userService.getInactiveUserProducts(this.userId).subscribe(
      (response: GetProductsListResponse) => {
        this.userService.userAdsList.next(response.products);
      },
      err => {
        // TBA - error msg on ui
        console.log(err.error);
      }
    );
  }

}
