import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../../home-module/product-details';
@Component({
  selector: 'app-advertisment-details',
  templateUrl: './advertisment-details.component.html',
  styleUrls: ['./advertisment-details.component.css']
})
export class AdvertismentDetailsComponent implements OnInit 
{
  productdetails: ProductDetails;

  constructor() { }

  ngOnInit() {
    this.productdetails = new ProductDetails();
  }
}
