import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductSort } from '../../models/product-sort';
import { ProductSortService } from 'src/app/services/product-sort.service';
import { UserService } from 'src/app/services/user/user.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { GetProductsListResponse } from 'src/app/models/get-products-list-response';
import { ErrorResponse } from '../../models/error-response';
import { PagingInfo } from 'src/app/models/paging-info';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
  @Input() adsList: Product[];

  noProductResponse: boolean = false;
  pageNumber: number = 1;
  pageSize: number = 9;
  error = new ErrorResponse;
  advertiseId: string;
  productSortOptions: ProductSort;
  totalItem : number = 0;
  pagingInfo: PagingInfo;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
    private productSortService: ProductSortService
  ) { }

  ngOnInit() {
    if (this.router.url.includes("/products")) {
      this.productService.getProductsList(this.pageNumber, this.pageSize).subscribe(
        (response: GetProductsListResponse) => {
          let noProductResponse: boolean = false;
          if (response == null) {
            noProductResponse = true;
            this.error.code = null;
            this.error.message = "No Products Found..";
            this.productService.sendErrorObj(this.error);
          }
          else{
            this.adsList = response.products;
            this.pagingInfo = response.pagingInfo;
            this.totalItem = (environment.isMockingEnabled) ? 13 : this.pagingInfo.totalPages * this.pageSize;
            console.log(this.totalItem);
          }
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
    
    if (localStorage.StoreCurrentPage != null) {
      this.pageNumber = this.pageChanged(localStorage.StoreCurrentPage);
    }
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

  getProductsByPageNumber(pageNumber, pageSize) {
    this.productService.getProductsList(pageNumber, pageSize).subscribe(
      (response: GetProductsListResponse) => {
        let noProductResponse: boolean = false;
        if (response == null) {
          noProductResponse = true;
        }
        else {
          this.adsList = response.products;
          this.pagingInfo = response.pagingInfo;
          this.totalItem = this.pagingInfo.totalPages * this.pageSize;
        }

      },
      err => {
        // TBA - error msg on ui
        console.log(err.error);
      }
    );
  }

  pageChanged($event): any {
    this.getProductsByPageNumber($event, this.pageSize);
    console.log($event);
    localStorage.StoreCurrentPage = $event;
    window.scrollTo(0, 0);
    return $event;
  }
}
