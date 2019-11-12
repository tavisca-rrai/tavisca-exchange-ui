import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetUserProfileResponse } from 'src/app/models/user/get-user-profile-response';
import { IUserService } from 'src/app/models/i-user-service';
import { GetProductsListResponse } from 'src/app/models/get-products-list-response';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/models/product';
import { UserProfile } from 'src/app/models/user/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserMockService implements IUserService {

  constructor() { }

  getDummyUserProfile(userId): UserProfile {
    let userProfileObj = new UserProfile();
    userProfileObj.id = userId;
    userProfileObj.name = "Nikita Narkhede";
    userProfileObj.contactNumber = "8485733995";
    userProfileObj.emailId = "demo@something.com";
    userProfileObj.profileImageUrl = "https://scontent-frx5-1.cdninstagram.com/vp/b8ce57551b48edfec3b1e644e9a47f9b/5E4F1F60/t51.2885-19/11821175_1046879962002756_496959586_a.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com";
    return userProfileObj;
  }

  getDummyActiveUserProducts(): Product[] {
    let product1 = new Product();
    product1.id = "3";
    product1.address.line1 = "Nashik Road";
    product1.address.city = "Nashik ";
    product1.address.state = "Maharshtra";
    product1.title = "Fun stories about car and kids";
    product1.category = "cars";
    product1.description = "Just A Photo";
    product1.postDate = new Date();
    product1.heroImageUrl = "http://i.imgur.com/REM4kQUg.jpg";
    product1.price.amount = 730000;
    product1.price.isNegotiable = true;
    product1.imageUrls.push('http://i.imgur.com/REM4kQUg.jpg');

    let product2 = new Product();
    product2.id = "4";
    product2.address.line1 = "Kothrud Paschima Nagri";
    product2.address.city = "Pune";
    product2.address.state = "Maharshtra";
    product2.title = "Hyundai I20 i20 Asta 1.2, 2014, Petrol";
    product2.category = "cars";
    product2.description = "Maruti Suzuki India Limited, formerly known as Maruti Udyog Limited, is an automobile manufacturer in India. It is a 56.21% owned subsidiary of the Japanese car and motorcycle manufacturer Suzuki Motor Corporation. As of July 2018, it had a market share of 53% of the Indian passenger car market.";
    product2.postDate = new Date();
    product2.heroImageUrl = "https://i.ytimg.com/vi/dsWxMoh3_50/maxresdefault.jpg";
    product2.price.amount = 6800000;
    product2.price.isNegotiable = true;
    product2.imageUrls.push('https://i.ytimg.com/vi/dsWxMoh3_50/maxresdefault.jpg');

    let itemList: Product[] = [product1, product2];
    return itemList;
  }

  getDummyInactiveUserProducts(): Product[] {
    let product1 = new Product();
    product1.id = "5";
    product1.address.line1 = "Baner";
    product1.address.city = "Pune";
    product1.address.state = "Maharshtra";
    product1.title = "Maruti Suzuki Wagon R LXI, 2016, CNG & Hybrids";
    product1.category = "cars";
    product1.description = "Most Beautiful Car in The World";
    product1.postDate = new Date();
    product1.heroImageUrl = "https://image.shutterstock.com/image-photo/big-small-ripe-red-strawberry-260nw-642144988.jpg";
    product1.price.amount = 460000;
    product1.price.isNegotiable = true;
    product1.imageUrls.push('https://image.shutterstock.com/image-photo/big-small-ripe-red-strawberry-260nw-642144988.jpg');

    let product2 = new Product();
    product2.id = "6";
    product2.address.line1 = "Dombivali";
    product2.address.city = "Mumbai";
    product2.address.state = "Maharashtra";
    product2.title = "Volkswagen Vento Highline Diesel AT, 2016, Diesel";
    product2.category = "cars";
    product2.description = "New Car";
    product2.postDate = new Date();
    product2.heroImageUrl = "https://cdn.vox-cdn.com/thumbor/qW3lRejqR7xJAG_FTdRyxjfbalA=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65408496/tesla_model_3_0638.0.jpg";
    product2.price.amount = 8600000;
    product2.price.isNegotiable = true;
    product2.imageUrls.push('https://cdn.vox-cdn.com/thumbor/qW3lRejqR7xJAG_FTdRyxjfbalA=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65408496/tesla_model_3_0638.0.jpg');

    let itemList: Product[] = [product1, product2];
    return itemList;
  }

  getUserProfile(
    userId: string
  ): Observable<GetUserProfileResponse> {
    if (userId != environment.userSetting.userId) {
      return null;
    }
    let getUserProfileResponse = new GetUserProfileResponse();
    getUserProfileResponse.userProfile = this.getDummyUserProfile(userId);
    return of(getUserProfileResponse);
  }

  getActiveUserProducts(
    userId: string
  ): Observable<GetProductsListResponse> {
    if (userId != environment.userSetting.userId) {
      return null;
    }
    var getProductsListResponse = new GetProductsListResponse();
    getProductsListResponse.products = this.getDummyActiveUserProducts();
    return of(getProductsListResponse);
  }

  getInactiveUserProducts(
    userId: string
  ): Observable<GetProductsListResponse> {
    if (userId != environment.userSetting.userId) {
      return null;
    }
    var getProductsListResponse = new GetProductsListResponse();
    getProductsListResponse.products = this.getDummyInactiveUserProducts();
    return of(getProductsListResponse);
  }

}
