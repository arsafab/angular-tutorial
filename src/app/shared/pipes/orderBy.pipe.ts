import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  public transform<T>(array: T[], field?: string): T[] {
    if (!Array.isArray(array)) {
      return;
    }

    array.sort((a: T, b: T) => {
      const firstElem = field ? a[field] : a;
      const secondElem = field ? b[field] : b;

      return firstElem < secondElem
        ? 1
        : firstElem > secondElem ? -1 : 0;
    });

    return array;
  }
}
