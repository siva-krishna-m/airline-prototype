import { map, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Station } from 'src/app/state/model/station.model';
import * as fromRoot from '../../state/reducers';

@Component({
  selector: 'app-modify-search',
  templateUrl: './modify-search.component.html',
  styleUrls: ['./modify-search.component.scss']
})
export class ModifySearchComponent implements OnInit {

  fromStations$: Observable<Station[]> = of([]);
  toStations$: Observable<Station[]> = of([]);
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.fromStations$ = this.store.select(fromRoot.selectStations);
  }

  setFromStation(fromSt: Station): void {
   this.toStations$ = this.fromStations$.pipe(map(stations=> stations.filter(st => st.code !== fromSt.code)))
  }

}
