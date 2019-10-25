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

  static monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsList(3, 15).subscribe(
      (response: GetProductsListResponse) => {
        this.adsList = response.products;
      },
      err => {
        // TBA - error msg on ui
        console.log(err.error);
      }
    );
  }

}
