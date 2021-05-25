import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent implements OnInit {
  keyword : string = 'name';
  

  constructor(public ms:MainService) { }
  
  ngOnInit(): void {
  }

  reset() {
    this.ms.countriesList.map( (country: any) => {
    country.hidden = false;
    })
  }

  compareSearchWord(searchWord: string) {
    this.ms.countriesList.map( (country: any) => {
      let reg = new RegExp(searchWord.toUpperCase());
       country.hidden = !reg.test(country.name.toUpperCase());
    })
    this.exportList();
  }

  exportList(){
    console.log( this.ms.countriesList.filter((country: any) => { return !country.hidden}));
  }
}
