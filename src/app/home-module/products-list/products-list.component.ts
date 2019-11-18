import { Data, SearchFilter, SortOptions, Filter } from './../../models/sort-options';
import { environment } from './../../../environments/environment';
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
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
  searchedQuery: string = "";
  imageServer: string = environment.imageApiSettings.BaseUrl;
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
      let data = new Data();
      data.ProductSort = new SortOptions();
      data.Filters = new Array<Filter>();
      data.ProductSort.Order = "Desc";
      data.ProductSort.Type = "Date";

      this.productService.getProductsList(this.pageNumber, this.pageSize, data).subscribe(
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
    this.getSearchQuery();
    
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
            search.SearchQuery = query;
            data.Filters.push(search);
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
    if (this.productSortOptions != null) {
      data.ProductSort = this.productSortOptions.ProductSort;
      data.Filters = new Array<Filter>();
      if (this.searchedQuery.length > 0) {
        let search = new SearchFilter();
        search.SearchQuery = this.searchedQuery;
        data.Filters.push(search);
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
  getProductsByPageNumber(pageNumber, pageSize) {
    let data = new Data();
    data.ProductSort = new SortOptions();
    data.Filters = new Array<Filter>();
    data.ProductSort.Order = "Desc";
    data.ProductSort.Type = "Date";
    this.productService.getProductsList(pageNumber, pageSize,data).subscribe(
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
    localStorage.StoreCurrentPage = $event;
    window.scrollTo(0, 0);
    return $event;
  }
}
