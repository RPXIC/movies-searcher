import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Movie from './Movie'

const MoviesList = ({ movies }) => {
	const navigation = useNavigation()

	return (
		<SafeAreaView style={{ flex: 9 }}>
			<FlatList
				data={movies}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => (
					<Movie movie={item} navigation={navigation} />
				)}
			/>
		</SafeAreaView>
	)
}

export default MoviesList
