import { useEffect, useState } from 'react'
import getMovies from '../services/getMovies'

const useMovies = (page, query) => {
	const [movies, setMovies] = useState(['default'])
	const [results, setResults] = useState(0)

	useEffect(() => {
		;(async () => {
			if (query.trim() === '') return
			const { Search, totalResults } = await getMovies(page, query)
			setMovies(Search)
			setResults(totalResults)
		})()
	}, [page, query])

	return { movies, results }
}

export default useMovies
