import { useState } from 'react'
import { Title, SearchForm, MoviesList, PageNav } from 'components'
import useMovies from 'hooks/useMovies'

const Results = () => {
	const [newPage, setNewPage] = useState(1)
	const { movies, results, parsedPage } = useMovies({ newPage })

	return (
		<div>
			<Title>Movies Searcher</Title>
			<div className='SearchForm-wrapper'>
				<SearchForm />
			</div>
			{movies[0] !== 'default' && movies.length !== 0 && (
				<PageNav
					results={results}
					page={parsedPage}
					setNewPage={setNewPage}
				/>
			)}
			<MoviesList movies={movies} />
		</div>
	)
}

export default Results
