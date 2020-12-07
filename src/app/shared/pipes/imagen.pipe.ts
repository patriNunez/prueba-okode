import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

const base_url = environment.base_small_img_url;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( img: string): string {

      if ( !img ) {
        return ``;
    } else {
        return `${ base_url }${ img }`;
    }

  }

}
