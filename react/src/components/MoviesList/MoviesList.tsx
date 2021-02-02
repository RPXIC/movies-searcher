import PropTypes from 'prop-types'
import { Movie } from 'components'
import { MovieReqInterface, MoviesInterface } from 'interfaces'
import './MoviesList.css'

const MoviesList = ({ movies }: MoviesInterface) => {
	if (movies.length === 0) return <p>Search a movie</p>

	return (
		<div className='movies-list'>
			{movies.map((movie: MovieReqInterface) => (
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
