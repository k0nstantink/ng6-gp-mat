import { Component, OnInit, Output } from '@angular/core';
import { Eras } from './main/eras.model';
import { GpDataService } from './main/gp.data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  eras: Eras[];

  constructor( private gpDataService: GpDataService) {
  }

  ngOnInit(): void {
    this.eras = this.gpDataService.getEras();
  }

  onSidenavClose() {
  }
}
