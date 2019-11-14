import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetProductDetailsResponse } from 'src/app/models/get-product-details-response';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { ErrorResponse } from '../../models/error-response';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-advertisment-details',
  templateUrl: './advertisment-details.component.html',
  styleUrls: ['./advertisment-details.component.css']
})
export class AdvertismentDetailsComponent implements OnInit, OnDestroy {
  noProductResponse: boolean = false;
  isPriceNegotiable: string;
  isAddressPresent: boolean = false;
  productdetails: GetProductDetailsResponse = new GetProductDetailsResponse();
  productModel: Product = new Product();
  error = new ErrorResponse;
  isPreviewOn: string = 'false';
  isPreviewEnabled: boolean = false;
  images: string[] = [];
  constructor(private productService: ProductService, private router: ActivatedRoute, private routerToProducts: Router) {
  }

  goToProductList() {
    this.routerToProducts.navigate(['/products/details']);
  }
  ngOnDestroy() {
    this.isPreviewEnabled = false;
    this.isPreviewOn = 'false';
  }
  ngOnInit() {
    window.scroll(0,0);
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
        if (this.productdetails.product.price.isNegotiable)
          this.isPriceNegotiable = "Negotiable";
        else
          this.isPriceNegotiable = "Non-Negotiable";
        if (this.productdetails.product.pickupAddress.city == null)
          this.isAddressPresent = false;
        else
          this.isAddressPresent = true;
        this.images.push(this.productdetails.product.heroImage);
        if (this.productdetails.product.images != null) {
          for (let productImage in this.productdetails.product.images) {
            this.images.push(this.productdetails.product.images[productImage]);
          }
        }
      }
      else {
        this.noProductResponse = true;
        this.error.code = 404;
        this.error.message = "Page Not Found";
        this.productService.sendErrorObj(this.error);
      }
    }
    else {
      let id: string;
      this.router.params.subscribe((params: Params) => {
        id = params['id'];
      });
      this.productService.getProductDetails(id).subscribe(
        (response: GetProductDetailsResponse) => {
          if (response == null || response.product == null || response.seller == null) {
            this.noProductResponse = true;
            this.error.code = 404;
            this.error.message = "Page Not Found";
            this.productService.sendErrorObj(this.error);
          }
          else {
            this.productdetails.product = response.product;
            this.productdetails.seller = response.seller;
            if (this.productdetails.product.price.isNegotiable)
              this.isPriceNegotiable = "Negotiable";
            else
              this.isPriceNegotiable = "Non-Negotiable";
            if (this.productdetails.product.pickupAddress.city == null)
              this.isAddressPresent = false;
            else
              this.isAddressPresent = true;
            this.images.push(this.productdetails.product.heroImage);
            if (this.productdetails.product.images != null) {
              for (let productImage in this.productdetails.product.images) {
                this.images.push(this.productdetails.product.images[productImage]);
              }
            }
          }
        },
        error => {
          this.noProductResponse = true;
          this.error.code = error.code;
          this.error.message = error.message;
          this.productService.sendErrorObj(this.error);
          console.error('Oops:', error.message);
        },
      );
    }
  }
}
