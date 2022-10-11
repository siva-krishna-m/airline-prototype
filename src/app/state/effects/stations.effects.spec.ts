import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StationsEffects } from './stations.effects';

describe('StationsEffects', () => {
  let actions$: Observable<any>;
  let effects: StationsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StationsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StationsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
