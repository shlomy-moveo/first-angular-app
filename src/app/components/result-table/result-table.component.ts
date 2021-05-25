import { Component, OnInit } from '@angular/core';
import { Country, MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {

  constructor(public ms:MainService) { }

  
  ngOnInit(): void {

    this.ms.getCountries().subscribe(
      (res : Country[] ) => {
        if (!res ){ throw new Error("res is undefined")}
        this.ms.countriesList = res;
        // console.log(this.countriesList);
       } ,
          (err: any) => {
            console.log(err);
          }
    )

  }

}
