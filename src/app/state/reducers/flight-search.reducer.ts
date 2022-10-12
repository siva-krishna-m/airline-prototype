import { FlightSearch } from './../../models/bookings.model';
import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { addFlightSearch } from '../actions/booking.actions';


export const flightSearchFeatureKey = 'flightSearch';

export interface State {
  flightSearch: FlightSearch | Object
}

export const initialState: State = {
  flightSearch: {}
};

export const reducer = createReducer(
  initialState,
  on(addFlightSearch, (state, {payload}) => ({...state, flightSearch: payload}))
);
