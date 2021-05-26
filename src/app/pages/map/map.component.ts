import { Component, ElementRef, OnInit } from '@angular/core';
import {} from 'googlemaps';
import { ViewChild } from '@angular/core';
import { MapService } from 'src/app/services/map.service';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  


  constructor(public mapService: MapService) { }
    


ngOnInit(): void {


}


}
