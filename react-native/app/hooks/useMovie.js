import { useEffect, useState } from 'react'
import getMovie from '../services/getMovie'

const useMovie = ({ route }) => {
	const { imdbID } = route.params.movie
	const [movie, setMovie] = useState({})
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
		;(async () => {
			const res = await getMovie(imdbID)
			setMovie(res)
		})()
	}, [imdbID])

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
