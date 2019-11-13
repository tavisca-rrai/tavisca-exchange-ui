import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
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

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.router.url.includes("/products")) {
      this.productService.getProductsList(3, 15).subscribe(
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
          this.adsList = response;
        },
        err => {
          // TBA - error msg on ui
          console.log(err.error);
        }
      );
    }
  }
}
