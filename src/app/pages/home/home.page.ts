import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../core/models/Movie';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  movies: Movie[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMovies(idList?: string) {
    this.dataService.getMovies(idList).subscribe(
       (movies) => {
          this.movies = movies;
          this.dataService.saveListLocalStorage(movies);
       },
       (error: HttpErrorResponse) => {
        console.log(error);
        this.dataService.presentAlert(error);
       });
  }

}
