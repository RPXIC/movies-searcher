import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './PageNav.css'

const PageNav = ({ results, page, setNewPage }) => {
	const [Prev, setPrev] = useState(false)
	const [Next, setNext] = useState(true)
	const totalPages = Math.ceil(results / 10)
	const history = useHistory()
	const { query } = useParams()

	if (Prev && page === 1) setPrev(false)
	if (!Prev && page > 1) setPrev(true)
	if (Next && page === totalPages) setNext(false)
	if (!Next && page < totalPages) setNext(true)

	const handleNext = () => {
		setNewPage((prevPage) => prevPage + 1)
		history.push(`/results/${page + 1}/${query}`)
	}

	const handlePrev = () => {
		setNewPage((prevPage) => prevPage - 1)
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
