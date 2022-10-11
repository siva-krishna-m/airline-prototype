import { Component, Input, EventEmitter, Output, AfterViewInit, ElementRef, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Station } from 'src/app/state/model/station.model';

/**
 * @title Autocomplete Stations
 */
@Component({
  selector: 'auto-complete-stations',
  templateUrl: './auto-complete-stations.component.html',
  styleUrls: ['./auto-complete-stations.component.scss']
})
export class AutoCompleteStationsComponent implements AfterViewInit, OnChanges {
  filteredStates: Observable<Station[]> = of([]);

  @Input() set value(val: string) {
    if(val) {
      this.stateCtrl.setValue(val);
    }
  }
  stateCtrl: FormControl;
  @Input() stations: Station[] | null = [];
  @Input() label!: string;
  @Output() selectedStation: EventEmitter<any> = new EventEmitter();
  @ViewChild('autoSelect') autoSelect!: ElementRef;
  @Output() closeOptions: EventEmitter<any> = new EventEmitter(true);

  constructor() {
    this.stateCtrl  = new FormControl(this.value || '');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['stations'].currentValue) {
      this.filteredStates = this.stateCtrl.valueChanges.pipe(
        startWith(''),
        map(state => (state ? this._filterStates(state) : this.stations?.slice()) as Station[]),
      );
    }
  }

  private _filterStates(value: string): Station[] {
    const filterValue = value.toLowerCase();

    return (this.stations as Station[]).filter(state => (state.name.toLowerCase().includes(filterValue) || state.code.toLowerCase().includes(filterValue)));
  }

  setSelectedOption(station: Station) {
    this.selectedStation.emit(station)
  }

  ngAfterViewInit(): void {
    // this.autoSelect.nativeElement.focus();
  }

  closePanel() {
    this.closeOptions.emit(true);
  }
}
