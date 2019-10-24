import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  adsList = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProductsList().subscribe((data: any[]) => {
      this.adsList = data;
    })
  }

}
