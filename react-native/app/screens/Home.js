import React from 'react'
import { View } from 'react-native'
import { Background, SearchForm } from '../components'

const Home = () => {
	return (
		<View style={{ flex: 1, flexDirection: 'column' }}>
			<Background>
				<SearchForm />
			</Background>
		</View>
	)
}

export default Home
