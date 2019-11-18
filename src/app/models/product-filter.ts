import { SortOptions } from './sort-options';
import { SearchFilter } from './search-filter';
import { PriceFilter } from './price-filter';
import { CategoryFilter } from './category-filter';

export class ProductFilter{
   public ProductSort:SortOptions;
   public Filters:Array<SearchFilter|PriceFilter|CategoryFilter>;
}