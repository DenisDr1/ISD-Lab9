export class PrismModel {
    calculateVolume(base: number, height: number, length: number): number {
      return (base * height * length) / 2;
    }
  
    calculateArea(base: number, height: number, length: number): number {
      const baseArea = base * height / 2;
      const sideArea = base * length;
      const totalArea = baseArea * 2 + sideArea * 3;
      return totalArea;
    }
  }
  