import { Component, OnInit, Input, ViewEncapsulation, DoCheck } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { ProductSort } from '../../models/product-sort';
import { SortOptions,PriceFilter,Data } from "../../models/sort-options";
import { ProductService } from '../../services/product.service';
import { UserService } from 'src/app/services/user/user.service';
import { CategoryFilter } from 'src/app/models/category-filter';
import { ProductFilter } from 'src/app/models/product-filter';
@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LeftNavBarComponent implements OnInit,DoCheck {
  maxPriceRange:number = 500000;
  minValue: number = 0;
  maxValue: number = this.maxPriceRange;
  selectedSort: string = "DateDSC";
  productSortOptions: ProductSort;
  sortOptions: SortOptions;
  userId: string;
  sortValueForFilter:string;
  priceFilter:PriceFilter;
  data:Data;
  categoryFilter:CategoryFilter;
  productFilter:ProductFilter;
  filters: any[] = [];
  categories = ["Property", "Car", "Furniture", "Mobile", "Bike", "Book", "Fashion", "Electronic", "Other"];
  options: Options = {
    floor: this.minValue,
    ceil: this.maxValue,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '₹' + value.toString();
        case LabelType.High:
          if(value < this.maxPriceRange)
            return '₹' + value.toString();
          else
            return '₹' + value.toString()+"+";
        default:
          return '₹' + value;
      }
    }
  };

  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {
    this.userId = this.userService.getUserFromStorage().id;
  }
  onSelect() {
    this.setProductSortOptions();
  }
  onSelectCheckbox(category:string,isChecked:boolean){
    if(isChecked){
      this.categoryFilter.List.push(category);
    }
    else{
      const index: number = this.categoryFilter.List.indexOf(category);
      if (index !== -1) {
        this.categoryFilter.List.splice(index, 1);
      }  
    }
  }
  ngDoCheck(): void {
    if(this.maxValue > this.maxPriceRange){
      this.maxValue = this.maxPriceRange;
    }
  }
  ngOnInit() {
    this.productSortOptions = new ProductSort();
    this.priceFilter = new PriceFilter();
    this.data = new Data();
    this.categoryFilter = new CategoryFilter();
    this.categoryFilter.List = [];
    this.sortOptions = new SortOptions();
    this.setProductSortOptions();
  }
  setSortValueForFilter(){
    if(this.sortOptions.Type=="Date" ){
      if(this.sortOptions.Order=="ASC"){
        this.sortValueForFilter = "Oldest";
      }
      else if(this.sortOptions.Order=="DSC"){
        this.sortValueForFilter = "Latest";
      }
    }
    else if(this.sortOptions.Type=="Price"){
      if(this.sortOptions.Order=="ASC"){
        this.sortValueForFilter = "Low to High";
      }
      else if(this.sortOptions.Order=="DSC"){
        this.sortValueForFilter = "High to Low";
      }
    }
  }
  setProductSortOptions() {
    this.sortOptions.Type = this.selectedSort.slice(0, this.selectedSort.length - 3);
    this.sortOptions.Order = this.selectedSort.slice(this.selectedSort.length - 3, this.selectedSort.length);
    this.productSortOptions.ProductSort = this.sortOptions;
    this.setSortValueForFilter();
  }
  setFilterOptions(){
    this.productFilter = new ProductFilter();
    this.productFilter.Filters = [];
    this.data.Filters = [];
    this.setPriceFilterOptions();
    this.setProductSortOptions();
    this.filters.push(this.priceFilter);
    this.filters.push(this.categoryFilter);
    this.productFilter.ProductSort = this.sortOptions;
    this.productFilter.Filters.push(this.categoryFilter);
    this.data.ProductSort = this.sortOptions;
    this.data.Filters.push(this.priceFilter);
    this.data.Filters.push(this.categoryFilter);
  }
  setPriceFilterOptions(){
    this.priceFilter.Min = this.minValue;
    this.priceFilter.Max = this.maxValue;
  }
  applySort() {
    console.log(this.data);
    this.setFilterOptions();
    this.productService.setProductSortOptions(this.productSortOptions);
  }
}
