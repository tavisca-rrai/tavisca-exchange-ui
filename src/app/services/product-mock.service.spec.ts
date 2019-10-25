import { TestBed } from '@angular/core/testing';

import { ProductMockService } from './product-mockable.service';

describe('ProductMockableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductMockService = TestBed.get(ProductMockService);
    expect(service).toBeTruthy();
  });
});
