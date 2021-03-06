import PropTypes from 'prop-types'
import { Props } from 'types'
import './Title.css'

const Title = ({ children }: Props) => <h1 className='title'>{children}</h1>

export default Title

Title.propTypes = {
	children: PropTypes.node.isRequired,
}
