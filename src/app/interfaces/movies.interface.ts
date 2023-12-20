export interface genres {
  genres: string[];
}
export interface DelfoMovie {
  movies: Movie[];
  genres: genres;
}

export interface Movie {
  id: number;
  title: string;
  image: string;
  description: string;
  genre: string;
}
