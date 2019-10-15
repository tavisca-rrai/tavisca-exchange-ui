import { TestBed } from '@angular/core/testing';

import { GetAdvertismentsListService } from './get-advertisments-list.service';

describe('GetAdvertismentsListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAdvertismentsListService = TestBed.get(GetAdvertismentsListService);
    expect(service).toBeTruthy();
  });
});
