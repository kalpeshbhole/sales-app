import { TestBed } from '@angular/core/testing';

import { StoreModuleService } from './store-module.service';

describe('StoreModuleService', () => {
  let service: StoreModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
