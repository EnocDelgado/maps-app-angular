import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout;

  constructor( private placesService: PlacesService ) {}

  onQueryChanged( query: string = '') {

    // validation
    if ( this.debounceTimer ) clearTimeout( this.debounceTimer );

    // wait before end write
    this.debounceTimer = setTimeout( () => {

        this.placesService.getPlacesByQuery( query );
    }, 350)
  }

}
