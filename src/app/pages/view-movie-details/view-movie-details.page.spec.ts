import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewMovieDetailsPageRoutingModule } from './view-movie-details-routing.module';

import { ViewMovieDetailsPage } from './view-movie-details.page';

describe('ViewMessagePage', () => {
  let component: ViewMovieDetailsPage;
  let fixture: ComponentFixture<ViewMovieDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMovieDetailsPage ],
      imports: [IonicModule.forRoot(), ViewMovieDetailsPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMovieDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
