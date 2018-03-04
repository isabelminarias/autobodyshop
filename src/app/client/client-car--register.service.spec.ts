import { TestBed, inject } from '@angular/core/testing';

import { ClientCarRegisterService } from './client-car--register.service';

describe('ClientCarRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientCarRegisterService]
    });
  });

  it('should be created', inject([ClientCarRegisterService], (service: ClientCarRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
