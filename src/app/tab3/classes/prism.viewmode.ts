import { PrismModel } from './prism.model';

export class PrismViewModel {
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
 
