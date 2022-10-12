import { map, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Station } from 'src/app/state/model/station.model';
import * as fromRoot from '../../state/reducers';
import * as bookingActions from '../../state/actions/booking.actions';
import { PassengerCount } from '../passenger-count/passenger-count.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modify-search',
  templateUrl: './modify-search.component.html',
  styleUrls: ['./modify-search.component.scss'],
})
export class ModifySearchComponent implements OnInit {
  searchForm!: FormGroup;
  totalNoOfPassengers = 0;
  passengerCount!: PassengerCount;
  fromStations$: Observable<Station[]> = of([]);
  toStations$: Observable<Station[]> = of([]);
  classTypes = [
    { label: 'Economy', value: 'ECONOMY' },
    { label: 'Basic', value: 'BASIC' },
    { label: 'Main', value: 'MAIN' }
  ]

  constructor(
    private store: Store,
    private datePipe: DatePipe
    ) {
    this.searchForm = new FormGroup({
      departureStation: new FormControl('', Validators.required),
      destinationStation: new FormControl('', Validators.required),
      departureDate: new FormControl('', Validators.required),
      destinationDepartureDate: new FormControl('', Validators.required),
      passengerCount: new FormControl('', Validators.required),
      passengerClass: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.fromStations$ = this.store.select(fromRoot.selectStations);
  }

  setFromStation(fromSt: Station): void {
    this.searchForm['controls']['departureStation'].setValue(fromSt);
    this.toStations$ = this.fromStations$.pipe(
      map((stations) => stations.filter((st) => st.code !== fromSt.code))
    );
  }

  setToStation(toSt: Station) {
    this.searchForm['controls']['destinationStation'].setValue(toSt);
  }

  changeFromDate(date: Date) {
    this.searchForm['controls']['departureDate'].setValue(this.datePipe.transform(date, 'yyyy-MM-dd'));
  }
  changeToDate(date: Date) {
    this.searchForm['controls']['destinationDepartureDate'].setValue(this.datePipe.transform(date, 'yyyy-MM-dd'))
  }

  changePassengerCount(passengerCount: PassengerCount) {
    this.searchForm['controls']['passengerCount'].setValue(passengerCount);
  }

  submitForm() {
    this.store.dispatch(bookingActions.addFlightSearch({ payload: this.searchForm.value }));
  }

}
