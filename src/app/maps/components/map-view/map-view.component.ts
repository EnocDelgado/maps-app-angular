import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Map, Marker, Popup } from 'mapbox-gl';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) {}

  ngAfterViewInit(): void {

    if ( !this.placesService.useLocation ) throw Error('Doest not exist placeService.userLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: this.placesService.useLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
      });


    const popup = new Popup()
      .setHTML(`
        <h6>I'm here</h6>
        <span>I'm inthis site form the world</span>
      `);

    new Marker({ color: 'red' })
      .setLngLat( this.placesService.useLocation )
      .setPopup( popup )
      .addTo( map )

    this.mapService.setMap( map );
  }

}
