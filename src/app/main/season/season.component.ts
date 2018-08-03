import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GpDataService } from '../gp.data.service';

// Models
import { Seasons } from '../season/Seasons';
import { Race } from '../season/Seasons';
import { Circuit } from '../season/Seasons';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
  season: number;
  races: Race[];
  circuit: Circuit;

  constructor(
    private route: ActivatedRoute,
    private gpDataService: GpDataService
  ) { }

  ngOnInit() {
    this.season = this.route.snapshot.params['id'];
    this.gpDataService.getSeason(this.season)
    .subscribe((r) => {
      this.races = r.MRData.RaceTable.Races;
    });
  }



}
