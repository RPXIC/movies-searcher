import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FormElement } from 'types'
import './SearchForm.css'

const SearchForm = () => {
	const [query, setQuery] = useState('')
	const history = useHistory()

	const handleSubmit = async (e:FormElement) => {
		e.preventDefault()
		if (query.trim() === '') return
		history.push(`/results/1/${query}`)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				className='searchform-input'
				onChange={(e) => setQuery(e.target.value)}
				placeholder='Find a movie...'
				type='text'
				autoFocus
			/>
			<button className='button'>Search</button>
		</form>
	)
}

export default SearchForm
