import { Component } from '@angular/core';
import { PrismPresenter } from './prism.presenter';

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
  presenter: PrismPresenter;

  constructor() {
    this.presenter = new PrismPresenter();
  }

  calculate() {
    const { volume, area } = this.presenter.calculate(this.base, this.height, this.length);
    this.volume = volume;
    this.area = area;
  }
}
