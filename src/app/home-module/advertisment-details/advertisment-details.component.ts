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
  //images = [0, 1, 2].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(private productService: ProductService, private router: ActivatedRoute) {
  }
  ngOnInit() {
    let id: string;
    
    //images = [0, 1, 2].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    this.router.params.subscribe((params: Params) => {
      id = params['id'];
    });

    this.productService.getProductDetails(id).subscribe(
      (response: GetProductDetailsResponse) => {
        this.productdetails = response.productDetails;
        this.images.push(this.productdetails.product.heroImageUrl);
        for(let j=0;j<this.productdetails.product.imageUrls.length;j++)
        {
          this.images.push(this.productdetails.product.imageUrls[j]);
        }
        // console.log("images");
        // console.log(images);
      },
      err => {
        console.log(err.error);
      }
    );
  }
}
