import { Component, OnInit } from '@angular/core';
import { EconomicGroup } from './EconomicGroup';

@Component({
  selector: 'app-economic-group',
  templateUrl: './economic-group.component.html',
  styleUrls: ['./economic-group.component.scss']
})
export class EconomicGroupComponent implements OnInit {

  groups: EconomicGroup[] = [
    { label: 'Visão Agregada 1' },
    { label: 'Visão Agregada 2' },
    { label: 'Visão Agregada 3' },
  ]
  
  group: EconomicGroup;

  constructor() {
    this.group = { label: 'Visão Agregada 1' };
   }

  ngOnInit() {
  }

}
