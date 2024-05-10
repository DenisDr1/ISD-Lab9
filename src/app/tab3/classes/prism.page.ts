import { Component } from '@angular/core';
import { PrismViewModel } from './prism.viewmodel';

@Component({
  selector: 'app-prism',
  templateUrl: 'prism.page.html',
  styleUrls: ['prism.page.scss'],
})
export class PrismPage {
  viewModel: PrismViewModel;

  constructor() {
    this.viewModel = new PrismViewModel();
  }

  calculate() {
    this.viewModel.calculate();
  }
}
