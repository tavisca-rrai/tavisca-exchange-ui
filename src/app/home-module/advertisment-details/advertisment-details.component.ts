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
  id: string;
  imageArray: String[];

  constructor(private productService: ProductService, private router: ActivatedRoute) {
  }
  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      // let productMockServiceObj = new ProductMockService();
      // productMockServiceObj.getDummyProductList().forEach((p:Product) =>{
      //   if(p.id == params.id)
      //   {
      //     console.log(p);
      //     // this.productdetails.product = p;
      //   }
      // })
    });

    this.productService.getProductDetails(this.id).subscribe(
      (response: GetProductDetailsResponse) => {
        this.productdetails= response.productDetails;
        console.log(response);
      },
      err => {
        console.log(err.error);
      }
    );
  }
}
