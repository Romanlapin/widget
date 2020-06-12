import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OwlItemComponent } from './owl-item/owl-item.component';
import { MainWeatherComponent } from './main-weather/main-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    OwlItemComponent,
    MainWeatherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
