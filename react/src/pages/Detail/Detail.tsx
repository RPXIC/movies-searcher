import { useHistory } from 'react-router-dom'
import useMovie from 'hooks/useMovie'
import { RatingInterface } from 'interfaces'

const Detail = () => {
	const history = useHistory()
	const {
		Actors,
		Awards,
		Country,
		Director,
		Genre,
		Metascore,
		Plot,
		Poster,
		Production,
		Ratings,
		Released,
		Runtime,
		Title,
		Type,
		Writer,
	} = useMovie()

	return (
		<>
			<button className='button' onClick={() => history.goBack()}>
				Go Back
			</button>
			<h1>{Title}</h1>
			<div>
				<img src={Poster} alt={Title} />
			</div>
			<h3>Actors: {Actors}</h3>
			<p>Description: {Plot}</p>
			<div>
				{Awards && <p>Awards: {Awards} </p>}
				{Country && <p>Country: {Country}. </p>}
				{Metascore && <p>Metascore: {Metascore}. </p>}
				{Director && <p>Director: {Director}. </p>}
				{Genre && <p>Genre: {Genre}. </p>}
				{Production && <p>Production: {Production}. </p>}
				{Ratings && (
					<>
						<p>Ratings:</p>
						{Ratings.map((rating:RatingInterface, index:number): JSX.Element => (
							<p key={index}>
								Source: {rating.Source} - Value: {rating.Value}
							</p>
						))}
					</>
				)}
				{Released && <p>Released: {Released}. </p>}
				{Runtime && <p>Runtime: {Runtime}. </p>}
				{Type && <p>Type: {Type}. </p>}
				{Writer && <p>Writer: {Writer}. </p>}
			</div>
		</>
	)
}

export default Detail
