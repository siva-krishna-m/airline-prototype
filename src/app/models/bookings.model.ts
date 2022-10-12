export interface DepartureStation {
  code: string;
  lat: string;
  lon: string;
  name: string;
  city: string;
  state: string;
  country: string;
  woeid: string;
  tz: string;
  phone: string;
  type: string;
  email: string;
  url: string;
  runway_length: string;
  elev: string;
  icao: string;
  direct_flights: string;
  carriers: string;
}

export interface DestinationStation {
  code: string;
  lat: string;
  lon: string;
  name: string;
  city: string;
  state: string;
  country: string;
  woeid: string;
  tz: string;
  phone: string;
  type: string;
  email: string;
  url: string;
  runway_length: string;
  elev: string;
  icao: string;
  direct_flights: string;
  carriers: string;
}

export interface PassengerCount {
  adult: number;
  child: number;
  infant: number;
}

export interface FlightSearch {
  departureStation: DepartureStation;
  destinationStation: DestinationStation;
  departureDate: string;
  destinationDepartureDate: string;
  passengerCount: PassengerCount;
  passengerClass: string;
}
