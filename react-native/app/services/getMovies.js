import { API_KEY } from '../../apiKey'

const getMovies = async (page, query) => {
	const res = await fetch(
		`https://www.omdbapi.com/?apikey=${API_KEY}&page=${page}&s=${query}`
	)
	const { Search = [], totalResults = 0 } = await res.json()
	return { Search, totalResults }
}

export default getMovies
