import { SortOptions } from './sort-options';
import { PriceFilter } from './price-filter';
import { CategoryFilter } from './category-filter';

export class ProductFilter{
   public ProductSort:SortOptions;
   public Filters:Array<PriceFilter|CategoryFilter>;
}