import { Component, ElementRef, OnInit } from '@angular/core';
import {} from 'googlemaps';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  
  @ViewChild('map',{static:true }) mapElement?: ElementRef;
  map: any = google.maps.Map;
  
  keyword : string = '';


  // 32.0595683,34.7709697,14z

  constructor() { }
    


ngOnInit(): void {
  const mapProperties = {
    center: new google.maps.LatLng(32.064582, 34.7718053),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, mapProperties);

const marker = new google.maps.Marker({
  position: mapProperties.center,
  map: this.map,
});
}


createMarker(lat : number,lng :number){
  const marker = new google.maps.Marker({
    position: {lat,lng},
    map: this.map,
  });
  
}

}
