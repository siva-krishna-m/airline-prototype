import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../state/reducers';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.store.select(fromRoot.selectStations).subscribe(res=> console.log(res))
  }

}
