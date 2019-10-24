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

  //price = this.productdetails.price;
  // title =this.productdetails.title;
  // location =this.productdetails.location;
  // postdate =this.productdetails.postdate;
  // description = this.productdetails.description;

  // sellername = this.productdetails.sellername;
  // sellerduartion = this.productdetails.sellerduartion;
}
