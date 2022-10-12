import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DateRange, MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent implements OnInit {

  @Output() changeFromDate: EventEmitter<Date> = new EventEmitter();
  @Output() changeToDate: EventEmitter<Date> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  setToDate(ev: MatDatepickerInputEvent<any, DateRange<any>>){
    this.changeToDate.emit(ev.value);
  }
  setFromDate(ev: MatDatepickerInputEvent<any, DateRange<any>>){
    this.changeFromDate.emit(ev.value);
  }

}
