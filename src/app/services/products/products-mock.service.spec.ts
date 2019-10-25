import { TestBed } from '@angular/core/testing';

import { ProductsMockService } from './products-mock.service';

describe('ProductsMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsMockService = TestBed.get(ProductsMockService);
    expect(service).toBeTruthy();
  });
});
