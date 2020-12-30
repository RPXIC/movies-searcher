import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Link.css'

const LinkButton = ({ redirect, text }) => (
	<Link className='link' to={redirect}>
		{text}
	</Link>
)

export default LinkButton

LinkButton.propTypes = {
	redirect: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}
