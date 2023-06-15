import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string): string {
    // if (value.length <= 94) {
    //   return value;
    // } else {
    //   return value.split('', 94).join('') + ' ...';
    // }
    const res = value.length <= 95 ? value : `${value.slice(0, 95)}...`;
    return res;
  }

}
