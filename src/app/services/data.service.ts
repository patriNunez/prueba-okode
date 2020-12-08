import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Movie, IApiMovie } from '../core/models/Movie';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private alertCtrl: AlertController) { }

  public getMovieById(id: number): Movie {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    if (movies) {
      return movies.find( movie => movie.id === id);
    }

    return null;
  }

   public getMovies( movieId?: string): Observable<Movie[]>{

    let url = `${ base_url }/1`; // Default
    if (movieId) {
      url = `${ base_url }/${movieId}`;
    }
    return this.http.get<IApiMovie[]>(url).pipe(
      map( resp => {
        return resp['results'].map(
          (movie: IApiMovie) => new Movie(movie)
        );
      })
    );
  }


  saveListLocalStorage( movies: Movie[] ) {

    localStorage.setItem('movies', JSON.stringify(movies) );
  }

  async presentAlert(error: HttpErrorResponse) {
    const alert = await this.alertCtrl.create({
      header: error.name,
      message: error.message + ' ' + error.error.status_message,
      buttons: ['Accept']
    });
    alert.present();
  }
}
