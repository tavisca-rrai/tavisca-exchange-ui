import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetProductDetailsResponse } from 'src/app/models/get-product-details-response';
import { ProductDetails } from '../../models/product-details';
import { Preview } from '../../models/preview';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import {ErrorResponse} from '../../models/error-response';
@Component({
  selector: 'app-advertisment-details',
  templateUrl: './advertisment-details.component.html',
  styleUrls: ['./advertisment-details.component.css']
})
export class AdvertismentDetailsComponent implements OnInit {
  noProductResponse : boolean = false;
  isServiceWorking : boolean = true;
  productdetails: ProductDetails = new ProductDetails();
  preview:Preview = new Preview();
  productModel : Product = new Product();
  error = new ErrorResponse;
  images:string[]=[];

  constructor(private productService: ProductService, private router: ActivatedRoute,private routerToProducts: Router) {
  }

  goToProductList()
  {
    this.routerToProducts.navigate(['/products']);
  }
  ngOnInit() 
  {
    this.productModel=new Product();
    if(environment.isPreviewEnabled)
    {
      this.productService.getProductObj()
      .subscribe(
        product =>
        {
          if(product!=null)
          {
            this.preview = this.productService.GetPreview(product);
            this.images.push(this.preview.product.heroImageUrl);
            for (let productImage in this.preview.product.imageUrls)
            {
              this.images.push(this.preview.product.imageUrls[productImage]);
            }
            console.log('product Object');
            console.log(this.preview); 
          }
          else
          {
            this.noProductResponse = true;
            this.error.code=404;
            this.error.message="Page Not Found";
            console.log(this.error);
          }
        }
      );
    }
    else
    {
      let id: string;
      this.router.params.subscribe((params: Params) => {
        id = params['id'];
      });
      this.productService.getProductDetails(id).subscribe(
        (response: GetProductDetailsResponse) => 
        {
          if(response.productDetails == null)
          {
              this.noProductResponse = true;
              this.error.code=404;
              this.error.message="Page Not Found";
              console.log(this.error);
          }
          else
          { 
            this.productdetails = response.productDetails;
            console.log(this.productdetails);
            this.images.push(this.productdetails.product.heroImageUrl);
            for (let productImage in this.productdetails.product.imageUrls)
            {
              this.images.push(this.productdetails.product.imageUrls[productImage]);
            }
          } 
        },
        err => {
          this.isServiceWorking= false;
          console.log(err.error);
        }
      );
    }
    
  }
}
