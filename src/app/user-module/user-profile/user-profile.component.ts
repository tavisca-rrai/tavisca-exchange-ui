import { IdFilter } from './../../models/sort-options';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { GetUserProfileResponse } from 'src/app/models/user/get-user-profile-response';
import { UserProfile } from 'src/app/models/user/user-profile';
import { GetProductsListResponse } from 'src/app/models/get-products-list-response';
import { ProductService } from 'src/app/services/product.service';
import { Data, SortOptions, Filter, StatusFilter } from 'src/app/models/sort-options';

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
    private userService: UserService, private productService: ProductService) {
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
    // this.userService.getActiveUserProducts(this.userId).subscribe(
    //   (response: GetProductsListResponse) => {
    //     this.userService.userAdsList.next(response.products);
    //   },
    //   err => {
    //     // TBA - error msg on ui
    //     console.log(err.error);
    //   }
    // );
    let data = new Data();
    data.ProductSort = new SortOptions();
    data.Filters = new Array<Filter>();
    data.ProductSort.Order = "Desc";
    data.ProductSort.Type = "Date";
    let status = new StatusFilter();
    status.Status = "Active";
    let id = new IdFilter();
    id.SellerId = this.userId;
    data.Filters.push(status);
    data.Filters.push(id);
    this.productService.getProductsList(1, 200, data).subscribe(
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
    let data = new Data();
    data.ProductSort = new SortOptions();
    data.Filters = new Array<Filter>();
    data.ProductSort.Order = "Desc";
    data.ProductSort.Type = "Date";
    let id = new IdFilter();
    id.SellerId = this.userId;
    let status = new StatusFilter();
    status.Status = "Disabled";
    data.Filters.push(status);
    data.Filters.push(id);
    this.productService.getProductsList(1, 200, data).subscribe(
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
