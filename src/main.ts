import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2ZWxvcGVyMDAwMDkiLCJhIjoiY2xpOTB0eHB0MWJ3YTNoczZkYTViOHpvZCJ9.9XI61s3LAogYMUsHUAQlHw';

if ( !navigator.geolocation ) {
  alert('Navigator does not support Golocation')
  throw new Error('Navigator does not support Golocation')
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
