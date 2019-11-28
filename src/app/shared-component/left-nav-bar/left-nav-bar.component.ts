import { Component, OnInit, Input, ViewEncapsulation, DoCheck } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { ProductSort } from '../../models/product-sort';
import { SortOptions,PriceFilter,Data } from "../../models/sort-options";
import { ProductService } from '../../services/product.service';
import { UserService } from 'src/app/services/user/user.service';
import { CategoryFilter } from 'src/app/models/category-filter';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category-service/category.service';
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
  categoryFilter:CategoryFilter;
  productFilter:Data;
  categories:Category[];
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
    private userService: UserService,
    private categoryService:CategoryService
  ) {
    this.userId = this.userService.getUserFromStorage().id;
  }
  onSelect() {
    this.setProductSortOptions();
  }
  onSelectCheckbox(category:string,isChecked:boolean){
    if(isChecked){
      this.categoryFilter.Categories.push(category);
    }
    else{
      const index: number = this.categoryFilter.Categories.indexOf(category);
      if (index !== -1) {
        this.categoryFilter.Categories.splice(index, 1);
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
    this.productFilter = new Data();
    this.categoryFilter = new CategoryFilter();
    this.categoryFilter.Categories = [];
    this.sortOptions = new SortOptions();
    this.setProductSortOptions();

    
    this.categoryService.getCategories().subscribe(
      (response) => {
        this.categories = response.categories;
      },
      err => {
        console.log(err.error);
      }
    );


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
    this.productFilter.Filters = [];
    this.setPriceFilterOptions();
    this.productFilter.ProductSort = this.sortOptions;
    this.productFilter.Filters.push(this.productService.assignFilterName("Price",this.priceFilter));
    if(this.categoryFilter.Categories.length>0)
    this.productFilter.Filters.push(this.productService.assignFilterName("Category",this.categoryFilter));
  }
  setPriceFilterOptions(){
    this.priceFilter.Min = this.minValue;
    this.priceFilter.Max = this.maxValue;
  }
  applySort() {
    this.setFilterOptions();
    this.setProductSortOptions();
    this.productService.setProductFilterOptions(this.productFilter);
  }
}
