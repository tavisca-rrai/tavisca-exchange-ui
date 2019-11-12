import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetProductDetailsResponse } from 'src/app/models/get-product-details-response';
import { Product } from '../../models/product';
import { ActivatedRoute, Params } from '@angular/router';
import { Seller } from 'src/app/models/seller';

@Component({
  selector: 'app-advertisment-details',
  templateUrl: './advertisment-details.component.html',
  styleUrls: ['./advertisment-details.component.css']
})
export class AdvertismentDetailsComponent implements OnInit {
  productDetails: Product;
  sellerDetails: Seller;
  images: string[] = [];

  constructor(private productService: ProductService, private router: ActivatedRoute) {
  }
  ngOnInit() {
    let id: string;
    this.router.params.subscribe((params: Params) => {
      id = params['id'];
    });

    this.productService.getProductDetails(id).subscribe(
      (response: GetProductDetailsResponse) => {
        this.productDetails = response.product;
        this.sellerDetails = response.seller;
        this.images.push(this.productDetails.heroImage);
        for (let productImage in this.productDetails.images) {
          this.images.push(this.productDetails.images[productImage]);
        }
      },
      err => {
        console.log(err.error);
      }
    );
  }
}

