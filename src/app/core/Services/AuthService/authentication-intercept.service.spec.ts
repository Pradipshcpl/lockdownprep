import { TestBed } from '@angular/core/testing';

import { AuthenticationInterceptService } from './authentication-intercept.service';

describe('AuthenticationInterceptService', () => {
  let service: AuthenticationInterceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationInterceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
