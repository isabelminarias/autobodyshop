import { TestBed, inject } from '@angular/core/testing';

import { PostCarService } from './post-car.service';

describe('PostCarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostCarService]
    });
  });

  it('should be created', inject([PostCarService], (service: PostCarService) => {
    expect(service).toBeTruthy();
  }));
});
