import React from 'react'
import { View } from 'react-native'
import { Card } from 'react-native-elements'

const Movie = ({ movie, navigation }) => {
	const { Title, Poster, Year } = movie

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
					resizeMode='center'
					source={{ uri: Poster }}
					onPress={() => navigation.navigate('details', { movie })}
				/>
			</Card>
		</View>
	)
}

export default Movie
