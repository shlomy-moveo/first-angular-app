
import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { } from 'googlemaps';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-google-places',
  templateUrl: './google-places.component.html',
  styleUrls: ['./google-places.component.scss']
})
export class GooglePlacesComponent implements OnInit{

  @ViewChild('map',{static:true }) mapElement?: ElementRef;


  constructor(public mapService:MapService) { }
   directionsService = new google.maps.DirectionsService();
   directionsDisplay = new google.maps.DirectionsRenderer({
    map: this.mapService.map
})  

  mapProperties = {
    center: new google.maps.LatLng(this.mapService.center.lat, this.mapService.center.lng),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControlOptions: {
      mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
    }
    // mapId: 'c7330b6ad53da810'
};


  ngOnInit(): void {
    this.mapService.map = new google.maps.Map(document.getElementById("map") as HTMLElement, this.mapProperties),
     this.directionsService = new google.maps.DirectionsService,
     this.directionsDisplay = new google.maps.DirectionsRenderer({
       map:this.mapService.map
     })
     enum TravelMode {
      BICYCLING = 'BICYCLING',
      DRIVING = 'DRIVING',
      TRANSIT = 'TRANSIT',
      TWO_WHEELER = 'TWO_WHEELER',
      WALKING = 'WALKING',
  }

     this.directionsService.route(
      {
              origin: "Har Sinai St 1, Tel Aviv-Yafo, israel",
              destination: "Hamifras 10, Yavne, israel",
              travelMode: TravelMode.DRIVING 
      },
      (response, status) => {
       console.log(response);
       console.log(status);
       this.directionsDisplay.setDirections(response);

      }
  )
  
    //  this.directionsService.route(DirectionsRequest:{

    //  })

    
    // this.directionsRenderer.setMap(this.mapService.map);

    this.mapService.createMarker(this.mapService.center.lat, this.mapService.center.lng)
    this.mapService.map.mapTypes.set("styled_map", this.mapService.styledMapType);
    this.mapService.map.setMapTypeId("styled_map");

  }



}
