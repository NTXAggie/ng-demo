import { TestBed } from '@angular/core/testing';

import { CountiesResolver } from './counties.resolver';

describe('CountiesResolver', () => {
  let resolver: CountiesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CountiesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
