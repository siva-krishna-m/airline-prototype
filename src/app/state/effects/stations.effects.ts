import { SearchFlightService } from './../../service/search-flight.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { mergeMap, tap } from 'rxjs';
import * as stationActions from '../actions/stations.actions';

@Injectable()
export class StationsEffects {
  constructor(
    private actions$: Actions,
    private searchFlightService: SearchFlightService) {}

  init$ = createEffect(
    () => this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      mergeMap(() => this.searchFlightService.getStations().pipe(
        mergeMap((res)=> [stationActions.addStations({ payload: res })])
      ))
    )
  );
}
