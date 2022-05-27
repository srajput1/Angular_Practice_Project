import { TestBed } from '@angular/core/testing';

import { CakeListService } from './cake-list.service';

describe('CakeListService', () => {
  let service: CakeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CakeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
