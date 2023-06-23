import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value : Date): any {
    const currentyear = new Date().getFullYear();
    return currentyear;
  }

}
