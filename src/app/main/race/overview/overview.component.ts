import { Component, OnInit, Input } from '@angular/core';
import { RaceModel } from '../race.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
