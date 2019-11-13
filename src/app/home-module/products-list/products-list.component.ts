import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetProductsListResponse } from 'src/app/models/get-products-list-response';
import { Product } from 'src/app/models/product';
<<<<<<< HEAD
import {ErrorResponse} from '../../models/error-response';
=======
>>>>>>> 5d81c83fc6915e08bbfb9031d662c0fbc90b4cbd
import { ProductSort } from '../../models/product-sort';
import { ProductSortService } from 'src/app/services/product-sort.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  adsList: Product[];
<<<<<<< HEAD
  error = new ErrorResponse;
  advertiseId : string;
  pageNumber : number = 1;
  pageSize : number = 100;

=======
>>>>>>> 5d81c83fc6915e08bbfb9031d662c0fbc90b4cbd
  productSortOptions:ProductSort;
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];

  constructor(private productService: ProductService,private productSortService:ProductSortService) { }

  ngOnInit() {
    this.productService.getProductsList(this.pageNumber, this.pageSize).subscribe(
      (response: GetProductsListResponse) => {
        let noProductResponse : boolean = false;
        if(response == null)
        {
            noProductResponse = true;
            this.error.code=null;
            this.error.message="No Products Found..";
            this.productService.sendErrorObj(this.error); 
        }
        else
        {
          this.adsList = response.products;
        }
       
      },
      err => {
        // TBA - error msg on ui
        console.log(err.error);
      }
    );
    this.getSortOptions();
  }

  getSortOptions(){
    this.productService.getProductSortOptions().subscribe(
      (response)=>{
        this.productSortOptions = new ProductSort();
        this.productSortOptions = response;
        this.applySort();
      },
      err=>{console.log(err.error);}
    );
  }
  
  applySort(){
    this.productSortService.getSortedProductsList(1,2,this.productSortOptions).subscribe(
      (response: GetProductsListResponse) => {
        this.adsList = response.products;
        console.log(response.products);
      },
      err => {
        // TBA - error msg on ui
        console.log(err.error);
      }
    );
    console.log(this.productSortOptions);
  }
}
