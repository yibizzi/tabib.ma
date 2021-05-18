import { TestBed } from '@angular/core/testing';

import { LoggedoutGuardService } from './loggedout-guard.service';

describe('LoggedoutGuardService', () => {
  let service: LoggedoutGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedoutGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
