import { TestBed, inject } from '@angular/core/testing';

import { CarqueryService } from './carquery.service';

describe('CarqueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarqueryService]
    });
  });

  it('should be created', inject([CarqueryService], (service: CarqueryService) => {
    expect(service).toBeTruthy();
  }));
});
