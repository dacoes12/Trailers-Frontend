import { TestBed } from '@angular/core/testing';

import { ServiceGeneroService } from './service-genero.service';

describe('ServiceGeneroService', () => {
  let service: ServiceGeneroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGeneroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
