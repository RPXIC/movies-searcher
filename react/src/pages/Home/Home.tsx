import { Title, SearchForm } from 'components'

const Home = () => {
	return (
		<div>
			<Title>Movies Searcher</Title>
			<div className='SearchForm-wrapper'>
				<SearchForm />
			</div>
		</div>
	)
}

export default Home
