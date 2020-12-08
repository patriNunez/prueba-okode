import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

const baseUrl = environment.base_small_img_url;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( img: string): string {

      if ( !img ) {
        return ``;
    } else {
        return `${ baseUrl }${ img }`;
    }

  }

}
