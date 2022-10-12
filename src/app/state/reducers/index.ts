import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromStations from './stations.reducer';
import * as fromFlightSearch from './flight-search.reducer';


export interface State {
  [fromStations.stationsFeatureKey]: fromStations.State,
  [fromFlightSearch.flightSearchFeatureKey]: fromFlightSearch.State,
}

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state, action) {
    const nextState = reducer(state, action);
    // if (action.type !== "@ngrx/store/init" && action.type !== "@ngrx/effects/init") {
    //   const savedState = localStorage.getItem('appState') ? JSON.parse(localStorage.getItem('appState') as string) : null;
    //   localStorage.setItem('appState', JSON.stringify(savedState ? { ...savedState, ...nextState } : { ...nextState }));
    //   return { ...savedState, ...nextState };
    // }
    return {...nextState};
  };
}

export const reducers: ActionReducerMap<State> = {
  [fromStations.stationsFeatureKey]: fromStations.reducer,
  [fromFlightSearch.flightSearchFeatureKey]: fromFlightSearch.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [localStorageSyncReducer] : [localStorageSyncReducer];

export const stationsState = createFeatureSelector<fromStations.State>('stations');
export const flightSearchState = createFeatureSelector<fromFlightSearch.State>('flightSearch');

export const selectStations = createSelector(stationsState, (state) => state.stations);
export const selectFlightSearch = createSelector(flightSearchState, (state) => state.flightSearch);
