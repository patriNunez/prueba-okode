import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ViewMovieDetailsPageRoutingModule } from './view-movie-details-routing.module';
import { ViewMovieDetailsPage } from './view-movie-details.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMovieDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [ViewMovieDetailsPage]
})
export class ViewMovieDetailsPageModule {}
