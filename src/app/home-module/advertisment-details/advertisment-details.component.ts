import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetProductDetailsResponse } from 'src/app/models/get-product-details-response';
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
export class AdvertismentDetailsComponent implements OnInit,OnDestroy {
  noProductResponse : boolean = false;
  isServiceWorking : boolean = true;
  productdetails: GetProductDetailsResponse = new GetProductDetailsResponse();
  productModel : Product = new Product();
  error = new ErrorResponse;
  isPreviewOn:boolean;
  images:string[]=[];
  constructor(private productService: ProductService, private router: ActivatedRoute,private routerToProducts: Router) {
  }

  goToProductList()
  {
    this.routerToProducts.navigate(['/products']);
  }
  ngOnDestroy()
  {
    environment.isPreviewEnabled=false;
    this.isPreviewOn=false;
  }
  ngOnInit() 
  {
    this.productModel=new Product();
    if(environment.isPreviewEnabled)
    {
      this.isPreviewOn =true;
      this.productService.getProductObj()
      .subscribe(
        product =>
        {
          if(product!=null)
          {
            this.productdetails = this.productService.GetPreview(product);
            this.images.push(this.productdetails.product.heroImage);
            if(this.productdetails.product.images != null)
            {
              for (let productImage in this.productdetails.product.images)
              {
                this.images.push(this.productdetails.product.images[productImage]);
              }
            }   
          }
        },
        error => 
        {
          console.error('Oops:', error.message);
        },
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
          if(response ==null || response.product == null || response.seller == null)
          {
              this.noProductResponse = true;
              this.error.code=404;
              this.error.message="Page Not Found";
              this.productService.sendErrorObj(this.error);
          }
          else
          { 
            this.productdetails.product = response.product;
            this.productdetails.seller = response.seller;
            this.images.push(this.productdetails.product.heroImage);
            if(this.productdetails.product.images != null)
            {
              for (let productImage in this.productdetails.product.images)
              {
                this.images.push(this.productdetails.product.images[productImage]);
              }
            }          
          } 
        },
        error => 
        {
          console.error('Oops:', error.message);
        },
      );
    }
  }
}

