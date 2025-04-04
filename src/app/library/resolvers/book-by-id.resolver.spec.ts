import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { bookByIdResolver } from './book-by-id.resolver';

describe('bookByIdResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => bookByIdResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
