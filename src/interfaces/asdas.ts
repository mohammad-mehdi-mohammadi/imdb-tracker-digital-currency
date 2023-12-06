

export interface imdbEach {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
export interface imdb {
    Search: Array<imdbEach>;
    totalResults: string;
}
