import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { publicRoutesGuard } from './public-routes.guard';

describe('publicRoutesGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => publicRoutesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
