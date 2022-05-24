import { TestBed } from '@angular/core/testing';

import { GenericApihandlerService } from './generic-apihandler.service';

describe('GenericApihandlerService', () => {
  let service: GenericApihandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericApihandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
