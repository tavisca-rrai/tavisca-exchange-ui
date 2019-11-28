import { Data, SearchFilter, SortOptions, Filter } from './../../models/sort-options';
import { environment } from './../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductSort } from '../../models/product-sort';
import { UserService } from 'src/app/services/user/user.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { GetProductsListResponse } from 'src/app/models/get-products-list-response';
import { ErrorResponse } from '../../models/error-response';
import { PagingInfo } from 'src/app/models/paging-info';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
  userId: string;
  adsList: Product[];
  noProductResponse: boolean = false;
  pageNumber: number = 1;
  pageSize: number = 9;
  error = new ErrorResponse;
  advertiseId: string;
  productFilterOptions: Data;
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
  searchedQuery: string = "";
  imageServer: string = environment.imageApiSettings.BaseUrl;
  totalItem: number = 0;
  pagingInfo: PagingInfo;

  constructor(
    private productService: ProductService,
    private router: Router,
    private userService: UserService,
  ) {
    this.userId = this.userService.getUserFromStorage().id;
  }

  ngOnInit() {
    this.getProducts(this.pageNumber,this.pageSize);
    this.getFilterOptions();
    this.getSearchQuery();

    if (localStorage.StoreCurrentPage != null) {
      this.pageNumber = this.pageChanged(localStorage.StoreCurrentPage);
    }
  }

  getProducts(pageNumber : number, pageSize : number) {
    if (this.router.url.includes("/products")) {
      let data = new Data();
      data.ProductSort = new SortOptions();
      data.Filters = new Array<Filter>();
      data.ProductSort.Order = "Desc";
      data.ProductSort.Type = "Date";

      this.productService.getProductsList(pageNumber, pageSize, data).subscribe(
        (response: GetProductsListResponse) => {
          let noProductResponse: boolean = false;
          if (response == null) {
            noProductResponse = true;
            this.error.code = null;
            this.error.message = "No Products Found..";
            this.productService.sendErrorObj(this.error);
          }
          else {
            this.adsList = response.products;
            this.pagingInfo = response.pagingInfo;
            this.totalItem = (environment.isMockingEnabled) ? 13 : this.pagingInfo.totalPages * this.pageSize;
          }
        }, err => {
          // TBA - error msg on ui
          console.log(err.error);
        });
    } else if (this.router.url.includes("/active")) {
      this.productService.getActiveUserProducts(this.userId).subscribe(
        (response) => {
          this.adsList = response.products;
        },
        err => {
          // TBA - error msg on ui
          console.log(err.error);
        });
    } else if (this.router.url.includes("/inactive")) {
      this.productService.getInactiveUserProducts(this.userId).subscribe(
        (response) => {
          this.adsList = response.products;
        },
        err => {
          // TBA - error msg on ui
          console.log(err.error);
        });
    }
  }

  getFilterOptions() {
    this.productService.getProductFilterOptions().subscribe(
      (response) => {
        this.productFilterOptions = new Data();
        this.productFilterOptions = response;
        this.applySort();
      },
      err => { console.log(err.error); }
    );
  }

  getSearchQuery() {
    this.productService.getSearchQuery().subscribe(
      (query) => {
        if (query != undefined) {
          this.searchedQuery = query;
          let data = new Data();
          data.ProductSort = new SortOptions();
          data.Filters = new Array<Filter>();
          data.ProductSort.Order = "Desc";
          data.ProductSort.Type = "Date";
          if (query.trim().length > 0) {
            let search = new SearchFilter();
            search.Query = query;
            data.Filters.push(this.productService.assignFilterName("Search",search));
          }
          this.productService.getProductsList(1, 200, data).subscribe(
            (response) => {
              this.adsList = response.products;
            }
            ,
            err => { console.log(err.error); }
          );
        }
      },
      err => { console.log(err.error); }
    );
  }

  applySort() {
    let data = new Data();
    if (this.productFilterOptions != null) {
      data.ProductSort = this.productFilterOptions.ProductSort;
      data.Filters = this.productFilterOptions.Filters;
    
      if (this.searchedQuery.length > 0) {
        let search = new SearchFilter();
        search.Query = this.searchedQuery;
        data.Filters.push(this.productService.assignFilterName("Search",search));
      }
      this.productService.getProductsList(1, 200, data).subscribe(
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

  pageChanged($event): any {
    this.getProducts($event, this.pageSize);
    localStorage.StoreCurrentPage = $event;
    window.scrollTo(0, 0);
    return $event;
  }
}
