import { createAction, props } from '@ngrx/store';
import { Station } from '../model/station.model';

export const loadStations = createAction(
  '[Stations] Load Stations'
);

export const addStations = createAction(
  '[Stations] Add Stations',
  props<{ payload: Station[] }>()
);




