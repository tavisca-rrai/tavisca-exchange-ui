import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetProductsListResponse } from 'src/app/models/get-products-list-response';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  adsList: Product[];

  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];

  constructor(private productService: ProductService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.router.url.includes("/profile/")) {
      let userId: string;
      this.activatedRouter.params.subscribe((params: Params) => {
        userId = params['id'];
      });
      this.productService.getUserProducts(userId).subscribe(
        (response) => {
          this.adsList = response.products;
          console.log(response);
        },
        err => {
          // TBA - error msg on ui
          console.log(err.error);
        }
      );
    } else {
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

}
