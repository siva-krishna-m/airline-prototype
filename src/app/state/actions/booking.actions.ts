import { FlightSearch } from './../../models/bookings.model';
import { createAction, props } from '@ngrx/store';

export const addFlightSearch = createAction(
  '[Booking] Flight Search',
  props<{ payload: FlightSearch }>()
);
