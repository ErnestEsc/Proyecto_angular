import { TestBed } from '@angular/core/testing';

import { ColegasService } from './colegas.service';

describe('ColegasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColegasService = TestBed.get(ColegasService);
    expect(service).toBeTruthy();
  });
});
