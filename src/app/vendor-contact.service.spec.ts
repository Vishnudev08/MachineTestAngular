import { TestBed } from '@angular/core/testing';

import { VendorContactService } from './vendor-contact.service';

describe('VendorContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorContactService = TestBed.get(VendorContactService);
    expect(service).toBeTruthy();
  });
});
