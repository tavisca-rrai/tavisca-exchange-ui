import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductSort } from '../../models/product-sort';
import { ProductSortService } from 'src/app/services/product-sort.service';
import { UserService } from 'src/app/services/user/user.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { GetProductsListResponse } from 'src/app/models/get-products-list-response';
import { ErrorResponse } from '../../models/error-response';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
  @Input() adsList: Product[];

  noProductResponse: boolean = false;
  pageNumber: number = 1;
  pageSize: number = 100;
  error = new ErrorResponse;
  advertiseId: string;
  productSortOptions: ProductSort;
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
    private productSortService: ProductSortService
  ) { }

  ngOnInit() {
    if (this.router.url.includes("/products")) {
      this.productService.getProductsList(1, 200).subscribe(
        (response: GetProductsListResponse) => {
          let noProductResponse: boolean = false;
          if (response == null) {
            noProductResponse = true;
            this.error.code = null;
            this.error.message = "No Products Found..";
            this.productService.sendErrorObj(this.error);
          }
          !response ? this.noProductResponse = true : this.adsList = response.products;
        }, err => {
          // TBA - error msg on ui
          console.log(err.error);
        });
    } else if (this.router.url.includes("/profile")) {
      this.userService.userAdsList.subscribe(
        (response: Product[]) => {
          console.log(response);
          this.adsList = response;
        },
        err => {
          // TBA - error msg on ui
          console.log(err.error);
        });
    }
    this.getSortOptions();
  }

  getSortOptions() {
    this.productService.getProductSortOptions().subscribe(
      (response) => {
        this.productSortOptions = new ProductSort();
        this.productSortOptions = response;
        this.applySort();
      },
      err => { console.log(err.error); }
    );
  }

  applySort() {
    this.productSortService.getSortedProductsList(1, 2, this.productSortOptions).subscribe(
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
