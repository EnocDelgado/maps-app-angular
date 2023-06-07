import { Component } from '@angular/core';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor(
    private placesService: PlacesService,
    private mapService : MapService
  ){}

  goToMyLocation() {

    // validation
    if ( !this.placesService.isUserLocationReady ) throw Error('Does not exist user location')
    if ( !this.mapService.isMapReady ) throw Error('There is not any map avaiable')

     this.mapService.flyTo( this.placesService.useLocation! );
  }

}
