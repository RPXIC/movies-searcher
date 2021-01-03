import React from 'react'
import { View } from 'react-native'
import { StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native'
import { Card } from 'react-native-elements'
import { Background, Info } from '../components'
import useMovie from '../hooks/useMovie'

const Details = ({ route }) => {
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
	} = useMovie({ route })

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<Background>
					<Card containerStyle={styles.card}>
						<Card.Title>{Title}</Card.Title>
						<Card.Image
							source={{ uri: Poster }}
							style={styles.image}></Card.Image>
						<View style={styles.details}>
							<Info text={Actors} title='Actors' />
							<Info text={Plot} title='Description' />
							{Awards && <Info text={Awards} title='Awards' />}
							{Country && <Info text={Country} title='Country' />}
							{Metascore && (
								<Info text={Metascore} title='Metascore' />
							)}
							{Director && (
								<Info text={Director} title='Director' />
							)}
							{Genre && <Info text={Genre} title='Genre' />}
							{Production && (
								<Info text={Production} title='Production' />
							)}
							{Ratings && (
								<View>
									<Text>Ratings:</Text>
									{Ratings.map((rating, index) => (
										<Text key={index}>
											Source: {rating.Source} - Value:{' '}
											{rating.Value}
										</Text>
									))}
								</View>
							)}
							{Released && (
								<Info text={Released} title='Released' />
							)}
							{Runtime && <Info text={Runtime} title='Runtime' />}
							{Type && <Info text={Type} title='Type' />}
							{Writer && <Info text={Writer} title='Writer' />}
						</View>
					</Card>
				</Background>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#ffffffa3',
		marginBottom: 15,
	},
	image: {
		width: '100%',
		height: 500,
		resizeMode: 'contain',
	},
	details: {
		marginTop: 15,
	},
})

export default Details
