import { Component, OnInit, OnDestroy } from '@angular/core';
import { GpDataService } from '../gp.data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Results } from './results';
import { Observable, pipe, Subscription, ObjectUnsubscribedError } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';


@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit, OnDestroy {

  year;
  round;
  selectedRace;

  paramSubscription: Subscription;
  raceSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private gpDataService: GpDataService
  ) { }

  ngOnInit() {

  this.raceSubscription = this.route.paramMap.pipe(
    map((params: ParamMap) => {
    return {
      id: params.get('id'),
      race: params.get('round')
    };
    }), switchMap((obj: any) => {
      this.round = obj.race;
      return this.gpDataService.getRaces(obj.id);
    })
  ).subscribe((p: any) => this.selectedRace = p.MRData.RaceTable.Races.find((race) => race.round === this.round));


  }

  ngOnDestroy() {
    this.raceSubscription.unsubscribe();
  }
}
