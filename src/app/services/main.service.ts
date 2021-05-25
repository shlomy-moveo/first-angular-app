import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Country {
  name: string;
  flag: string;
  hidden?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http:HttpClient
  ) { }


  countriesList: Country[] = []

  baseUrl: string = "https://restcountries.eu/rest/v2/"

  getCountries(): Observable<Country[]>{  
    return this.http.get<Country[]>( this.baseUrl + 'all') 
  }
}
