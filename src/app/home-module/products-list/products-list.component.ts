import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { UserService } from 'src/app/services/user/user.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { GetProductsListResponse } from 'src/app/models/get-products-list-response';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
  @Input() adsList: Product[];

  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.router.url.includes("/products")) {
      this.productService.getProductsList(3, 15).subscribe(
        (response: GetProductsListResponse) => {
          this.adsList = response.products;
        },
        err => {
          // TBA - error msg on ui
          console.log(err.error);
        }
      );

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
