import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getMovies from 'services/getMovies'

const useMovies = ({ newPage }) => {
	const [movies, setMovies] = useState(['default'])
	const [results, setResults] = useState(0)
	const { page, query } = useParams()
	const parsedPage = Number(page)

	useEffect(() => {
		;(async () => {
			if (query.trim() === '') return
			const { Search, totalResults } = await getMovies(page, query)
			setMovies(Search)
			setResults(totalResults)
		})()
		//eslint-disable-next-line
	}, [newPage, query])

	return {
		movies,
		results,
		parsedPage,
	}
}

export default useMovies
