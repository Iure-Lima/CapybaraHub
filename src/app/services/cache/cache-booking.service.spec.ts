import { TestBed } from '@angular/core/testing';

import { CacheBookingService } from './cache-booking.service';

describe('CachebookingService', () => {
  let service: CacheBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
