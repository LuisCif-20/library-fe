import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { publishersResolver } from './publishers.resolver';

describe('publishersResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => publishersResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
