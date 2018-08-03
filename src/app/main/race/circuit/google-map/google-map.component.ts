import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  constructor() { }

     // Google maps custom styling
     customStyle = [
      {
        elementType: 'satellite',
        stylers: [
          {
            hue: '#ff4400'
          },
          {
            saturation: -100
          },
          {
            lightness: -4
          },
          {
            gamma: 0.72
          }
        ]
      }];

  latitude = 51.2;
  longitude = 52.5;

  ngOnInit() {
  }

}
