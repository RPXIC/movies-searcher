import PropTypes from 'prop-types'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { PageNavInterface } from 'interfaces'
import './PageNav.css'

const PageNav = ({ results, page, setNewPage }: PageNavInterface) => {
	const [Prev, setPrev] = useState<boolean>(false)
	const [Next, setNext] = useState<boolean>(true)
	const totalPages = Math.ceil(results / 10)
	const history = useHistory()
	const { query }:any = useParams()

	if (Prev && page === 1) setPrev(false)
	if (!Prev && page > 1) setPrev(true)
	if (Next && page === totalPages) setNext(false)
	if (!Next && page < totalPages) setNext(true)

	const handleNext = () => {
		setNewPage((prevPage: number) => prevPage + 1)
		history.push(`/results/${page + 1}/${query}`)
	}

	const handlePrev = () => {
		setNewPage((prevPage: number) => prevPage - 1)
		history.push(`/results/${page - 1}/${query}`)
	}

	return (
		<div>
			<button
				className='button-nav'
				disabled={!Prev}
				onClick={handlePrev}>
				Prev
			</button>
			<span>
				Page: {page} / {totalPages}
			</span>
			<button
				className='button-nav'
				disabled={!Next}
				onClick={handleNext}>
				Next
			</button>
		</div>
	)
}

export default PageNav

PageNav.propTypes = {
	results: PropTypes.number.isRequired,
	page: PropTypes.number.isRequired,
	setNewPage: PropTypes.func.isRequired,
}