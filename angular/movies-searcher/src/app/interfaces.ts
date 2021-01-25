export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface Search {
    Search: Movie[];
    totalResults: string;
    Response: string;
}
