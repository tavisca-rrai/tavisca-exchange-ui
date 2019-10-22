import { TestBed } from '@angular/core/testing';

import { AdvertismentsService } from './advertisments.service';

describe('AdvertismentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvertismentsService = TestBed.get(AdvertismentsService);
    expect(service).toBeTruthy();
  });
});
