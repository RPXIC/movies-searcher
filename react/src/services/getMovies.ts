const API_KEY = process.env.REACT_APP_API_KEY

const getMovies = async (page: string, query: string) => {
	const res = await fetch(
		`https://www.omdbapi.com/?apikey=${API_KEY}&page=${page}&s=${query}`
	)
	const { Search = [], totalResults = 0 } = await res.json()
	return { Search, totalResults }
}

export default getMovies
