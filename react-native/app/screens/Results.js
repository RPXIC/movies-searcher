import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Background, MoviesList, NavPage } from '../components'
import useMovies from '../hooks/useMovies'

const Results = ({ route }) => {
	const { page, query } = route.params
	const navigation = useNavigation()
	const { movies, results } = useMovies(page, query)

	return (
		<View style={{ flex: 1, flexDirection: 'column' }}>
			<Background>
				<NavPage
					page={page}
					query={query}
					results={results}
					navigation={navigation}
				/>
				{movies ? <MoviesList movies={movies} /> : <Text>Results</Text>}
			</Background>
		</View>
	)
}

export default Results
