import { Component, OnInit, Input } from '@angular/core';
import { Circuit } from './circuits.model';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.css']
})
export class CircuitComponent implements OnInit {

  @Input() circuitData: Circuit;

 toggleCircuit = false;
 latitude;
 longitude;
 map = false;

  constructor() { }

  onToggleMap() {
    this.toggleCircuit = !this.toggleCircuit;
  }

  ngOnInit() {
  }

}
