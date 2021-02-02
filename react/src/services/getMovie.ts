const API_KEY = process.env.REACT_APP_API_KEY

const getMovie = async (id: string) => {
	const res = await fetch(
		`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
	)
	const movie = await res.json()
	return movie
}

export default getMovie
