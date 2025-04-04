import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isbn'
})
export class IsbnPipe implements PipeTransform {

  transform(value: number | string): string {
    const val = value.toString();
    return `${val.slice(0, 3)}-${val.slice(3, 6)}-${val.slice(6, 9)}-${val.slice(9, 12)}-${val.slice(12, 13)}`;
  }

}
