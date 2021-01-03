import { API_KEY } from '../../apiKey'

const getMovie = async (id) => {
	const res = await fetch(
		`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
	)
	const movie = await res.json()
	return movie
}

export default getMovie
