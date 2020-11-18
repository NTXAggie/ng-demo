import { TestBed } from '@angular/core/testing';

import { CitiesByStateResolver } from './cities-by-state.resolver';

describe('CitiesByStateResolver', () => {
  let resolver: CitiesByStateResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CitiesByStateResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
