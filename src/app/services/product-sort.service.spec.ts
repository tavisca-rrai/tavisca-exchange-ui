import { TestBed } from '@angular/core/testing';

import { ProductSortService } from './product-sort.service';

describe('ProductSortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductSortService = TestBed.get(ProductSortService);
    expect(service).toBeTruthy();
  });
});
