export interface NewPageInterface {
	newPage: number
}

export interface ParamsInterface {
    id?: string
	page?: string
	query?: string
}

export interface LinkInterface {
	redirect: string
	text: string
}

export interface MovieInterface {
    id: string
    title: string
    year: string
    poster: string
}

export interface MovieReqInterface {
    imdbID: string
    Title: string
    Year: string
    Poster: string
}

export interface MoviesInterface {
    movies: MovieReqInterface[]
}

export interface PageNavInterface {
    results: number
    page: number
    setNewPage: any
}

export interface MovieDetailsInterface {
    Actors: string
    Awards: string
    Country: string
    Director: string
    Genre: string
    Metascore: string
    Plot: string
    Poster: string
    Production: string
    Ratings: RatingInterface[]
    Released: string
    Runtime: string
    Title: string
    Type: string
    Writer: string
}

export interface RatingsInterface {
    rating: RatingInterface[]
}

export interface RatingInterface {
    Source: string
    Value: string
}