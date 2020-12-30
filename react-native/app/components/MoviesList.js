import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Movie from './Movie'

const MoviesList = ({ movies }) => {
	const navigation = useNavigation()

	return (
		<SafeAreaView style={{ flex: 9 }}>
			<FlatList
				data={movies}
				renderItem={({ item }) => (
					<Movie movie={item} navigation={navigation} />
				)}
				keyExtractor={(item, index) => index.toString()}
			/>
		</SafeAreaView>
	)
}

export default MoviesList
