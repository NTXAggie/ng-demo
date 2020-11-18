import { Component, Input, OnInit } from '@angular/core';
import { ICoordinates } from 'src/app/interfaces/coordinates';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.scss']
})
export class MapDisplayComponent implements OnInit {
  @Input()
  coords: ICoordinates = [];

  constructor() {
    console.log(this.coords);
  }

  ngOnInit(): void {
    console.log(this.coords);
  }

}
