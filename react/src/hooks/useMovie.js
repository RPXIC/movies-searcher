import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getMovie from 'services/getMovie'

const useMovie = () => {
	const { id } = useParams()
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
			const movie = await getMovie(id)
			setMovie(movie)
		})()
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
