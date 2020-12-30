import PropTypes from 'prop-types'
import { Movie } from 'components'
import './MoviesList.css'

const MoviesList = ({ movies }) => {
	if (movies[0] === 'default') return <p>Search a movie</p>
	if (movies.length === 0) return <p>No results</p>

	return (
		<div className='movies-list'>
			{movies.map((movie) => (
				<Movie
					key={movie.imdbID}
					id={movie.imdbID}
					title={movie.Title}
					year={movie.Year}
					poster={movie.Poster}
				/>
			))}
		</div>
	)
}

export default MoviesList

MoviesList.propTypes = {
	movies: PropTypes.array.isRequired,
}
