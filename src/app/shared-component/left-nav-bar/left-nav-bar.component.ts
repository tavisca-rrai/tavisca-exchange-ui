import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { ProductSort } from '../../models/product-sort';
import { SortOptions } from "../../models/sort-options";
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LeftNavBarComponent implements OnInit {
  minValue: number = 0;
  maxValue: number = 50000;
  selectedSort:string = "DateDSC";
  productSortOptions:ProductSort;
  sortOptions:SortOptions;
  categories = ["Property","Car","Furniture","Mobile","Bike","Book","Fashion","Electronic","Other"];
  options: Options = {
    floor: 0,
    ceil: 50000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '₹' + value.toString();
        case LabelType.High:
          return '₹' + value.toString();
        default:
          return '₹' + value;
      }
    }
  };
  
  constructor(private productService:ProductService) { }
  onSelect(){
    this.setProductSortOptions();
  }

  ngOnInit() {
    this.productSortOptions = new ProductSort();
    this.sortOptions  =new SortOptions();
    this.setProductSortOptions();
  }
  setProductSortOptions(){
    this.sortOptions.sortBy = this.selectedSort.slice(0,this.selectedSort.length-3);
    this.sortOptions.order = this.selectedSort.slice(this.selectedSort.length-3,this.selectedSort.length);
    this.productSortOptions.ProductSort = this.sortOptions;
  }
  applySort(){
    this.productService.setProductSortOptions(this.productSortOptions);
  }
}
