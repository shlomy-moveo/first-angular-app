import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  
  autocomplete:any

  constructor(public mapService:MapService) { }

  ngOnInit(): void {

    const defaultBounds = {
      north: this.mapService.center.lat + 0.1,
      south: this.mapService.center.lat - 0.1,
      east: this.mapService.center.lng + 0.1,
      west: this.mapService.center.lng - 0.1,
     };
     const input = document.getElementById("pac-input") as HTMLInputElement;
     const options = {
      bounds: defaultBounds,
      componentRestrictions: { country: "IL" },
      fields: ["address_components", "geometry", "icon", "name"],
      origin: this.mapService.center,
      strictBounds: false,
      types: ["establishment"],
     };
     
      this.autocomplete = new google.maps.places.Autocomplete(input, options);
  }

  addMarker(){
    const place = this.autocomplete.getPlace()

    this.mapService.createMarker(place.geometry.location.lat(),place.geometry.location.lng())


  }



}
