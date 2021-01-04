import { useEffect, useState } from 'react'
import getMovies from '../services/getMovies'

const useMovies = (page, query) => {
	const [movies, setMovies] = useState(['default'])
	const [results, setResults] = useState(0)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		;(async () => {
			if (query.trim() === '') return
			setIsLoading(true)
			const { Search, totalResults } = await getMovies(page, query)
			setMovies(Search)
			setResults(totalResults)
			setIsLoading(false)
		})()
	}, [page, query])

	return { isLoading, movies, results }
}

export default useMovies
