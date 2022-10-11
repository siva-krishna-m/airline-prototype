import { Action, createReducer, on } from '@ngrx/store';
import { Station } from '../model/station.model';
import { addStations } from '../actions/stations.actions';


export const stationsFeatureKey = 'stations';

export interface State {
  stations: Station[]
}

export const initialState: State = {
  stations: []
};

export const reducer = createReducer(
  initialState,
  on(addStations, (state, { payload }) => ({...state, stations: payload}))
);
