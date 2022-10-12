import { PassengerType } from './../../core/passenger-type';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface PassengerCount {
  adult: number;
  child: number;
  infant: number;
}

enum PassengerAction {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT"
}

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.css'],
})
export class PassengerCountComponent implements OnInit {
  // @Input() totalCount: number = 0;
  // // @Input() passengerType: string = '';
  // @Input() count: number = 0;
  @Output() changePassengerCount: EventEmitter<PassengerCount> = new EventEmitter();
  adult = PassengerType.ADULT;
  child = PassengerType.CHILD;
  infant = PassengerType.INFANT;
  showCounter = false;

  passengerCountMap: PassengerCount = {
    adult: 1,
    child: 0,
    infant: 0
  };
  totalPassengers = 'Adults - 1, Children - 0, Infants - 0';

  constructor() {}

  ngOnInit() {}

  updatePassengerCount(type: string, action: string) {
    switch(type) {
      case PassengerType.ADULT: {
        this.passengerCountMap = {
          ...this.passengerCountMap,
          adult: action===PassengerAction.INCREMENT ? this.passengerCountMap.adult+1 :  this.passengerCountMap.adult-1};
        break
      }
      case PassengerType.CHILD: {
        this.passengerCountMap = {
          ...this.passengerCountMap,
          child: action===PassengerAction.INCREMENT ? this.passengerCountMap.child+1 :  this.passengerCountMap.child-1};
        break;
      }
      case PassengerType.INFANT: {
        this.passengerCountMap = {
          ...this.passengerCountMap,
          infant: action===PassengerAction.INCREMENT ? this.passengerCountMap.infant+1 :  this.passengerCountMap.infant-1};
        break;
      }
       default: {
        break;
       }
    }
    this.changePassengerCount.emit(this.passengerCountMap);
    const { adult, child, infant } = this.passengerCountMap;
    this.totalPassengers = `Adults - ${adult}, Children - ${child}, Infants - ${infant}`
  }
}
