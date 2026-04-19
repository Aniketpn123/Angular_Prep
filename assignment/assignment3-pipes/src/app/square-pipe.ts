import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value:number): number {
   let  sq: number; 
    sq = value * value ; 
    return sq;
  }

}
