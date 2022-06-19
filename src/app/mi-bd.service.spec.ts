import { TestBed } from '@angular/core/testing';

import { MiBDService } from './mi-bd.service';

describe('MiBDService', () => {
  let service: MiBDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiBDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
