import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { MovieInterface } from 'interfaces'
import './Movie.css'

const Movie = ({ id, title, year, poster }: MovieInterface) => (
	<Link to={`/detail/${id}`} className='card'>
		<div className='card-img'>
			<figure>
				<img src={poster} alt={title} />
			</figure>
		</div>
		<div className='card-content'>
			<div className=''>
				<div className=''>
					<p className='title'>{title}</p>
					<p className='subtitle'>{year}</p>
				</div>
			</div>
		</div>
	</Link>
)

export default Movie

Movie.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.string,
	poster: PropTypes.string,
}
