import { Component } from '@angular/core';
import { PrismModel } from './prism.model';

@Component({
  selector: 'app-prism',
  templateUrl: 'prism.page.html',
  styleUrls: ['prism.page.scss'],
})
export class PrismPage {
  base: number;
  height: number;
  length: number;
  volume: number;
  area: number;
  model: PrismModel;

  constructor() {
    this.model = new PrismModel();
  }

  calculate() {
    this.volume = this.model.calculateVolume(this.base, this.height, this.length);
    this.area = this.model.calculateArea(this.base, this.height, this.length);
  }
}
