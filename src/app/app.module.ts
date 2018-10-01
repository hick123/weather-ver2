import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import {HttpModule} from '@angular/http'
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from "@agm/core";
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgProgressModule } from "@ngx-progressbar/core";
import { NgProgressRouterModule } from "@ngx-progressbar/router";

import { AppComponent } from './app.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatTabsModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatInputModule
} from "@angular/material";
import { WeatherComponent } from './weather/weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherService } from './weather.service';
import { WeatherMapComponent } from './weather-map/weather-map.component';
import { AppRoutingModule } from './/app-routing.module';
@NgModule({
  declarations: [AppComponent, WeatherComponent, WeatherMapComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AgmCoreModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpModule,
    NgxSpinnerModule,
    FormsModule,
    MatProgressSpinnerModule,
    AgmCoreModule.forRoot({      apiKey: "AIzaSyAu8LzHp3E1TLd6709MERfmL_FKQbCsQDY"
    }),
    AppRoutingModule,
    RouterModule,
    NgProgressModule.forRoot(),
    NgProgressRouterModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
