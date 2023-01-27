import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serialize',
})
export class SerializePipe implements PipeTransform {
  transform(...args: any): string {
    return args.toString();
  }
}
