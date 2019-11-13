import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetProductsListResponse } from 'src/app/models/get-products-list-response';
import { Product } from 'src/app/models/product';
import {ErrorResponse} from '../../models/error-response';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  adsList: Product[];
  error = new ErrorResponse;
  advertiseId : string;
  pageNumber : number = 1;
  pageSize : number = 100;

  constructor(private productService: ProductService) { }
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
  }
}
