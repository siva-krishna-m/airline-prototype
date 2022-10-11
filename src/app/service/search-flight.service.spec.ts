/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchFlightService } from './search-flight.service';

describe('Service: SearchFlight', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchFlightService]
    });
  });

  it('should ...', inject([SearchFlightService], (service: SearchFlightService) => {
    expect(service).toBeTruthy();
  }));
});
