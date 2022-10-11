import { AutoCompleteStationsComponent } from './auto-complete-stations/auto-complete-stations.component';
import { SearchFlightRoutes } from './search-flight.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFlightComponent } from './search-flight.component';
import { ModifySearchComponent } from './modify-search/modify-search.component';
import { MaterialGlobalModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SearchFlightRoutes,
    MaterialGlobalModule,
    ReactiveFormsModule,
  ],
  declarations: [SearchFlightComponent, ModifySearchComponent, AutoCompleteStationsComponent]
})
export class SearchFlightModule { }
