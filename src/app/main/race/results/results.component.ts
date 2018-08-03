import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() results;

  columnsToDisplay = ['pos', 'driver'];

  constructor() { }

  ngOnInit() {
    console.log(this.results);
  }

}
