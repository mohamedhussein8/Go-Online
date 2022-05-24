import { TestBed } from '@angular/core/testing';

import { ErrorHanlingManagementService } from './error-hanling-management.service';

describe('ErrorHanlingManagementService', () => {
  let service: ErrorHanlingManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHanlingManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
