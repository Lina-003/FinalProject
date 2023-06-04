export interface dataWikiShape {
  movie: {
    image: string;
    sinopsis: string;
    created: string;
    starring: string;
  };

  character: {
    id: number;
    photo: string;
    nCharacter: string;
    actor: string;
    description: string;
    status: string;
    gender: string;
    age: number;
    affilation: string;
    episode: string;
  };
}
