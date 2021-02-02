import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NewPageInterface, ParamsInterface } from 'interfaces'
import getMovies from 'services/getMovies'

const useMovies = ({ newPage }: NewPageInterface) => {
	const [movies, setMovies] = useState([])
	const [results, setResults] = useState<number>(0)
	const { page = '', query = '' }: ParamsInterface = useParams()
	const parsedPage = Number(page)

	useEffect(() => {
		;(async () => {
			if (query.trim() === '' || !Number.isInteger(parsedPage)) return
			const { Search, totalResults } = await getMovies(page, query)
			setMovies(Search)
			setResults(Number(totalResults))
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

useMovies.propTypes = {
	newPage: PropTypes.number.isRequired,
}
