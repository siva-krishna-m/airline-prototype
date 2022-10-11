import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromStations from './stations.reducer';


export interface State {
  [fromStations.stationsFeatureKey]: fromStations.State,
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
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [localStorageSyncReducer] : [localStorageSyncReducer];

export const stationsState = createFeatureSelector<fromStations.State>('stations');

export const selectStations = createSelector(stationsState, (state) => state.stations);
