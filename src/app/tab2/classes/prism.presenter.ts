import { PrismModel } from './prism.model';

export class PrismPresenter {
  model: PrismModel;

  constructor() {
    this.model = new PrismModel();
  }

  calculate(base: number, height: number, length: number): { volume: number, area: number } {
    const volume = this.model.calculateVolume(base, height, length);
    const area = this.model.calculateArea(base, height, length);
    return { volume, area };
  }
}
