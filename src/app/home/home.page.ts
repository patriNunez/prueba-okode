import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService, Message } from '../services/data.service';
import { Movie } from './models/Movie';

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

  getMovies() {

    this.dataService.getMovies().subscribe(
       (movies) => {
          console.log(movies);
          this.movies = movies;
          this.dataService.saveListLocalStorage(movies);
       },
       (error: HttpErrorResponse) => {
        console.log(error);
        this.dataService.presentAlert(error);
       });
  }

}
