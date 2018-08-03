import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  @Input() programData;
  constructor() { }

  ngOnInit() {
  }

}
