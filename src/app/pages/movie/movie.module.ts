import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MovieComponent } from './movie.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule, SharedModule],
  declarations: [MovieComponent],
  exports: [MovieComponent]
})
export class MovieComponentModule {}
