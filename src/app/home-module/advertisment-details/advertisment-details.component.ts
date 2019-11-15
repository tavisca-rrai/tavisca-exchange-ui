import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetProductDetailsResponse } from 'src/app/models/get-product-details-response';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../models/product';
import { Seller } from "../../models/seller";
import { Router } from '@angular/router';
import { ErrorResponse } from '../../models/error-response';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-advertisment-details',
  templateUrl: './advertisment-details.component.html',
  styleUrls: ['./advertisment-details.component.css']
})
export class AdvertismentDetailsComponent implements OnInit, OnDestroy {
  noProductResponse: boolean = false;
  isPriceNegotiable: string = "Non-Negotiable";
  isAddressPresent: boolean = false;
  productdetails: GetProductDetailsResponse = new GetProductDetailsResponse();
  productModel: Product = new Product();
  error = new ErrorResponse;
  isPreviewOn: string = 'false';
  isPreviewEnabled: boolean = false;
  images: string[] = [];
  imageHost: string = ""

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private routerToProducts: Router, private userService: UserService) { }

  //Add Images From Mock Database In Array 
  CreateImageArrayforMock() {
    this.images.push(this.productdetails.product.heroImage);
    for (let productImage in this.productdetails.product.images) {
      this.images.push(this.productdetails.product.images[productImage]);
    }
  }

  //Add Images From Actual Database In Array 
  CreateImageArrayforAPI() {
    this.images.push(environment.imageApiSettings.BaseUrl + this.productdetails.product.heroImage);
    for (let productImage in this.productdetails.product.images) {
      this.images.push(environment.imageApiSettings.BaseUrl + this.productdetails.product.images[productImage]);
    }
  }

  SetNegotiableAndAddress() {
    if (this.productdetails.product.price.isNegotiable)
      this.isPriceNegotiable = "Negotiable";
    if (this.productdetails.product.pickupAddress.city != null)
      this.isAddressPresent = true;
  }

  //Calling Fucntions Define Above 
  SetProductProp() {
    this.SetNegotiableAndAddress();
    if (environment.isMockingEnabled)
      this.CreateImageArrayforMock();
    else
      this.CreateImageArrayforAPI();
  }

  //If An Id is receoved which does not exist in Database then Send Error
  SendErrorResponse() {
    this.noProductResponse = true;
    this.error.code = 404;
    this.error.message = "Page Not Found";
    this.productService.sendErrorObj(this.error);
  }

  //Route to Seller's Profile Page
  SellerProfile() {
    this.routerToProducts.navigate(['/profile', this.productdetails.seller.id]);
  }

  ngOnDestroy() {
    this.isPreviewEnabled = false;
    this.isPreviewOn = 'false';
  }

  ngOnInit() {
    window.scroll(0, 0);
    let id: string;
    this.router.queryParams.pipe(filter(params => params.preview))
      .subscribe(params => {
        this.isPreviewOn = params.preview;
      })
    if (this.isPreviewOn == 'true') {
      this.isPreviewEnabled = true;
      var product = this.productService.getProductObj();
      if (product != null) {
        this.productdetails = this.productService.GetPreview(product);
        this.SetProductProp();
      }
      else {
        this.SendErrorResponse();
      }
    }
    else {
      this.router.params.subscribe((params: Params) => {
        id = params['id'];
      });
      this.productService.getProductDetails(id).subscribe(
        (response: GetProductDetailsResponse) => {
          if (response == null || response.product == null) {
            this.SendErrorResponse();
          }
          else {
            this.userService.getUserProfile(response.product.sellerId).subscribe(
              (data) => {
                this.productdetails.seller = data.userProfile;
              });
            this.productdetails.product = response.product;
            this.productdetails.seller = response.seller;
            this.SetProductProp();
          }
        }
      );
    }
  }
}

