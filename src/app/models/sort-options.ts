
export class SortOptions {
    public Type: string;
    public Order: string;
}
export class Filter { }
export class IdFilter implements Filter {
    public SellerId: string;
}
export class SearchFilter implements Filter {
    public SearchQuery: string;
}
export class PriceFilter implements Filter {
    public Min: number;
    public Max: number;
}
export class StatusFilter implements Filter {
    public Status: string;
}
export class Data {
    public ProductSort: SortOptions;
    public Filters: Array<Filter>
}
