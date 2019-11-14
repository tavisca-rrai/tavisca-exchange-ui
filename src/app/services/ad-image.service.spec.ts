import { TestBed } from '@angular/core/testing';

import { ImageService } from './ad-image.service';

describe('UploadImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageService = TestBed.get(ImageService);
    expect(service).toBeTruthy();
  });
});
