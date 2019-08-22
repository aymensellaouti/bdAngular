import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string): string {
    if (value.trim().length) {
      return value;
    }
    return 'cv.png';
  }

}
