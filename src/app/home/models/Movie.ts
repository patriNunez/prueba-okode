export class Movie {
    id: number;
    name: string;
    title: string;
    description: string;
    img: string;
    voteAverage: number;
    releaseDate: string;
    voteCount: number;

    constructor(
        title: string, description: string, img: string,
        voteAverage: number, id: number, date: string, voteCount: number)
        {
        this.id = id;
        this.title = title;
        this.description = description;
        this.img = img;
        this.voteAverage = voteAverage;
        this.releaseDate = date;
        this.voteCount = voteCount;
    }
  }
