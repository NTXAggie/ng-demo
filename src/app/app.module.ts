import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapDisplayComponent } from './components/map-display/map-display.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { StateInfoComponent } from './pages/state-info/state-info.component';
import { CitiesByPopComponent } from './components/cities-by-pop/cities-by-pop.component';
import { CountiesPerStateComponent } from './components/counties-per-state/counties-per-state.component';
import { CountiesByLetterComponent } from './components/counties-by-letter/counties-by-letter.component';
import { CitiesByLetterComponent } from './components/cities-by-letter/cities-by-letter.component';
import { ChartStartingLetterComponent } from './components/chart-starting-letter/chart-starting-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    MapDisplayComponent,
    LoaderComponent,
    PieChartComponent,
    LoginComponent,
    MenuComponent,
    StateInfoComponent,
    CitiesByPopComponent,
    CountiesPerStateComponent,
    CountiesByLetterComponent,
    CitiesByLetterComponent,
    ChartStartingLetterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBW_OZZeaWNEHuSFN_EKL8NPIcmOj3uZrw'
    }),
    FormsModule,
    ReactiveFormsModule,
    AgmSnazzyInfoWindowModule,
    HttpClientModule,
    ChartModule,
    FormsModule,
    TabViewModule,
    DropdownModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
