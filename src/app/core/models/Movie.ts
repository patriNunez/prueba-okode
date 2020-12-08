
export interface IApiMovie {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string;
    vote_average: number;
    release_date: string;
    vote_count: number;
  }

export class Movie {
    id: number;
    title: string;
    description: string;
    img: string;
    voteAverage: number;
    releaseDate: string;
    voteCount: number;

    constructor(IMovie: IApiMovie) {

        this.id = IMovie.id;
        this.title = IMovie.title;
        this.description = IMovie.overview;
        this.img = IMovie.backdrop_path;
        this.voteAverage = IMovie.vote_average;
        this.releaseDate = IMovie.release_date;
        this.voteCount = IMovie.vote_count;

    }
  }
