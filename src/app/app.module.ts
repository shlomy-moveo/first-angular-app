import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {FormsModule} from '@angular/forms'





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchControlComponent } from './components/search-control/search-control.component';
import { ResultTableComponent } from './components/result-table/result-table.component';
import { CountryCardComponent } from './components/result-table/country-card/country-card.component';
import { MapComponent } from './pages/map/map.component';
import { GooglePlacesComponent } from './components/google-places/google-places.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { DirectionComponent } from './components/direction/direction.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SearchControlComponent,
    ResultTableComponent,
    CountryCardComponent,
    MapComponent,
    GooglePlacesComponent,
    AutocompleteComponent,
    DirectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AutocompleteLibModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
