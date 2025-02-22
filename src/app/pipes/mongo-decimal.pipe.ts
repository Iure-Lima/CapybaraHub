import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mongoDecimal',
  standalone: true,
})
export class MongoDecimalPipe implements PipeTransform {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  transform(value: any): number | null {
    if (typeof value === 'object' && value?.$numberDecimal) {
      return Number.parseFloat(value.$numberDecimal);
    }

    if (!Number.isNaN(value)) {
      return Number.parseFloat(value);
    }

    return null;
  }
}
