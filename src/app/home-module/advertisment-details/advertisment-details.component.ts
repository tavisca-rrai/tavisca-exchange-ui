import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetProductDetailsResponse } from 'src/app/models/get-product-details-response';
import { ProductDetails } from '../../models/product-details';
import { Product } from '../../models/product';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductMockService } from "src/app/services/product-mock.service";
import { Seller } from 'src/app/models/seller';

@Component({
  selector: 'app-advertisment-details',
  templateUrl: './advertisment-details.component.html',
  styleUrls: ['./advertisment-details.component.css']
})
export class AdvertismentDetailsComponent implements OnInit {
  productdetails: Product;
  sellerdetails : Seller;
  images:string[]=[];
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
  
  constructor(private productService: ProductService, private router: ActivatedRoute) {
  }
  ngOnInit() {
    let id: string;
    this.router.params.subscribe((params: Params) => {
      id = params['id'];
    });

    this.productService.getProductDetails(id).subscribe(
      (response: GetProductDetailsResponse) => {
        this.productdetails = response.product;
        this.sellerdetails = response.seller;
        this.images.push(this.productdetails.heroImage);
        for (let productImage in this.productdetails.imageUrls)
        {
          this.images.push(this.productdetails.imageUrls[productImage]);
        }
      },
      err => {
        console.log(err.error);
      }
    );
  }

  public getFormatedDate(strDate:string):string {
  
    var date = new Date(strDate);
    return date.getDate() + " " + this.monthNames[date.getMonth()] + " " + date.getFullYear().toString().substr(-2);
  }
}
