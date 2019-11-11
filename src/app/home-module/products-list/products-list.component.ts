import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetProductsListResponse } from 'src/app/models/get-products-list-response';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  adsList: Product[];

  pageNumber : number = 1;
  pageSize : number = 100;

  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsList(this.pageNumber, this.pageSize).subscribe(
      (response: GetProductsListResponse) => {
        this.adsList = response.products;
      },
      err => {
        // TBA - error msg on ui
        console.log(err.error);
      }
    );
  }

  public getFormatedDate(strDate:string):string {
  
    var date = new Date(strDate);
    return date.getDate() + " " + this.monthNames[date.getMonth()] + " " + date.getFullYear().toString().substr(-2);
  }

}
