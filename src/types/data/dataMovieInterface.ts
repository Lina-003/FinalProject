export interface dataMovieShape {
  movie: {
    frontpage: string;
    sinopsis: string;
    created: string;
    starring: string;
  };

  characters: {
    id: number;
    photo: string;
    name: string;
  };
}
