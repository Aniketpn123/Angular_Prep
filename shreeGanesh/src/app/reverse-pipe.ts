import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    let revStr='';
    for(let i =value.length-1; i>=0 ;i--){
      revStr+=value[i];
    }
    return revStr;
  }

}
