import { TestBed, inject } from '@angular/core/testing';

import { DalServiceService } from './dal-service.service';

describe('DalServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DalServiceService]
    });
  });

  it('should be created', inject([DalServiceService], (service: DalServiceService) => {
    expect(service).toBeTruthy();
  }));
});
