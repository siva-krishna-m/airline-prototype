import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Station } from '../state/model/station.model';

@Injectable({
  providedIn: 'root'
})
export class SearchFlightService {

baseUrl = "http://localhost:3000/"

constructor(private http: HttpClient) { }

getStations() {
  return this.http.get<Station[]>(this.baseUrl+'stations');
}

}


