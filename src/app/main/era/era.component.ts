import { Component, OnInit, OnDestroy } from '@angular/core';
import { GpDataService } from '../gp.data.service';
import { Eras } from '../eras.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-era',
  templateUrl: './era.component.html',
  styleUrls: ['./era.component.css']
})
export class EraComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  era: Eras[];
  range;

  constructor(
    private gpDataService: GpDataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(p => {
    const era = +p['id'];
    this.gpDataService.getEra(era);
     this.gpDataService.selectedEra.subscribe(res => {
      this.era = res;
    });
    this.range = this.gpDataService.getRange(era, (era + 10));
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
