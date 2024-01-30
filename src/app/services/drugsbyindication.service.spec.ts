import { TestBed } from '@angular/core/testing';

import { DrugsbyindicationService } from './drugsbyindication.service';

describe('DrugsbyindicationService', () => {
  let service: DrugsbyindicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugsbyindicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
