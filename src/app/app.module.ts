import { reducers, metaReducers } from './state/reducers';
import { counterReducer } from './state/reducers/counter.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StationsEffects } from './state/effects/stations.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialGlobalModule } from 'src/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([StationsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !environment.production, // Restrict extension to log-only mode
    }),
    BrowserAnimationsModule,
    MaterialGlobalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
