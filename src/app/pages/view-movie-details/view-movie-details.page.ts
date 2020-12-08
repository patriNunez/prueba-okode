import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../core/models/Movie';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-view-movie-details',
  templateUrl: './view-movie-details.page.html',
  styleUrls: ['./view-movie-details.page.scss'],
})
export class ViewMovieDetailsPage implements OnInit {
  public movie: Movie;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movie = this.dataService.getMovieById(parseInt(id, 10));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Dashboard' : 'Home';
  }

  setAverageStars(movie: Movie): string {

    if (movie.voteAverage < 5) {
      return 'star-outline';
    } else if (movie.voteAverage > 7.5) {
      return 'star';
    }
    return 'star-half';
  }
}
