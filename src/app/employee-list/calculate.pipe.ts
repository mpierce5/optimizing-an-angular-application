import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'calculate',
  pure: true
})
export class CalculatePipe implements PipeTransform {
  @memo()
  transform(value: any, args?: any): any {
  }

}
