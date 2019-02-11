import { TestBed } from '@angular/core/testing';

import { ColsService } from './cols.service';

describe('ColsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColsService = TestBed.get(ColsService);
    expect(service).toBeTruthy();
  });
});
