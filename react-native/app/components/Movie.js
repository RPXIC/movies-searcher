import React from 'react'
import { View } from 'react-native'
import { Card } from 'react-native-elements'

const Movie = ({ movie, navigation }) => {
	const { Poster, Title, Year } = movie

	return (
		<View>
			<Card
				containerStyle={{
					backgroundColor: '#ffffffa3',
				}}>
				<Card.Title style={{ color: 'black' }}>
					{Title} - {Year}
				</Card.Title>
				<Card.Image
					onPress={() => navigation.navigate('details', { movie })}
					resizeMode='center'
					source={{ uri: Poster }}
				/>
			</Card>
		</View>
	)
}

export default Movie
