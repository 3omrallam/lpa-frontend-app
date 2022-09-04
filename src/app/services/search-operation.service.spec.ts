import { TestBed } from '@angular/core/testing';

import { SearchOperationService } from './search-operation.service';

describe('SearchOperationService', () => {
  let service: SearchOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
