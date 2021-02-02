import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getMovie from 'services/getMovie'
import { ParamsInterface, MovieDetailsInterface } from 'interfaces'

const useMovie = () => {
	const { id }: ParamsInterface = useParams()
	const [movie, setMovie] = useState<MovieDetailsInterface>({
		Actors: '',
		Awards: '',
		Country: '',
		Director: '',
		Genre: '',
		Metascore: '',
		Plot: '',
		Poster: '',
		Production: '',
		Ratings: [{Source:'', Value:''}],
		Released: '',
		Runtime: '',
		Title: '',
		Type: '',
		Writer: '',
	})

	const {
		Actors,
		Awards,
		Country,
		Director,
		Genre,
		Metascore,
		Plot,
		Poster,
		Production,
		Ratings,
		Released,
		Runtime,
		Title,
		Type,
		Writer,
	} = movie

	useEffect(() => {
		if (id) {
			;(async () => {
				const movie:MovieDetailsInterface = await getMovie(id)
				setMovie(movie)
			})()
		}
	}, [id])

	return {
		Actors,
		Awards,
		Country,
		Director,
		Genre,
		Metascore,
		Plot,
		Poster,
		Production,
		Ratings,
		Released,
		Runtime,
		Title,
		Type,
		Writer,
	}
}

export default useMovie
