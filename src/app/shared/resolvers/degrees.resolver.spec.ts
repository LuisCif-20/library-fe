import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { degreesResolver } from './degrees.resolver';

describe('degreesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => degreesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
