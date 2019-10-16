import { TestBed } from '@angular/core/testing';

import { GetAdvertismentDetailsService } from './get-advertisment-details.service';

describe('GetAdvertismentDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAdvertismentDetailsService = TestBed.get(GetAdvertismentDetailsService);
    expect(service).toBeTruthy();
  });
});
