import { TestBed } from '@angular/core/testing';

import { CategoryMockService } from './category-mock.service';

describe('CategoryMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryMockService = TestBed.get(CategoryMockService);
    expect(service).toBeTruthy();
  });
});
