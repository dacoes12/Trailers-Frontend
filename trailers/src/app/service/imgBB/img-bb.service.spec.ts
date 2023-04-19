import { TestBed } from '@angular/core/testing';

import { ImgBBService } from './img-bb.service';

describe('ImgBBService', () => {
  let service: ImgBBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgBBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
