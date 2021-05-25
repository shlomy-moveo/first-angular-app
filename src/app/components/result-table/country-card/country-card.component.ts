import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {


  
  constructor() { }
  @Input() country : any;
  
  ngOnInit(): void {
  }

  countryHide(country: any) {
    country.hidden = true;
  }


}
