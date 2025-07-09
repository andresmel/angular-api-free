import { TestBed } from '@angular/core/testing';

import { LoginServcie } from './loginServcie';

describe('Login', () => {
  let service: LoginServcie;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginServcie);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
