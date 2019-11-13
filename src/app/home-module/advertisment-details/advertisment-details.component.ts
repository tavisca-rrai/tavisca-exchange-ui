import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetProductDetailsResponse } from 'src/app/models/get-product-details-response';
import { ProductDetails } from '../../models/product-details';
import { Product } from '../../models/product';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductMockService } from "src/app/services/product-mock.service";

@Component({
  selector: 'app-advertisment-details',
  templateUrl: './advertisment-details.component.html',
  styleUrls: ['./advertisment-details.component.css']
})
export class AdvertismentDetailsComponent implements OnInit {
  productdetails: ProductDetails;
  images:string[]=[];
  constructor(private productService: ProductService, private router: ActivatedRoute) {
  }
  ngOnInit() {
    let id: string;
    this.router.params.subscribe((params: Params) => {
      id = params['id'];
    });

    this.productService.getProductDetails(id).subscribe(
      (response: GetProductDetailsResponse) => {
        this.productdetails = response.productDetails;
        this.images.push(this.productdetails.product.HeroImage);
        for (let productImage in this.productdetails.product.Images)
        {
          this.images.push(this.productdetails.product.Images[productImage]);
        }
      },
      err => {
        console.log(err.error);
      }
    );
  }
}
