import { TestBed } from '@angular/core/testing';

import { SalesPersonModuleService } from './sales-person-module.service';

describe('SalesPersonModuleService', () => {
  let service: SalesPersonModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesPersonModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
