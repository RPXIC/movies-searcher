import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, SearchBar } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const SearchForm = () => {
	const navigation = useNavigation()
	const [query, setQuery] = useState('')

	const onSubmit = () => {
		if (query.trim() === '') return
		navigation.navigate('results', { page: 1, query })
	}

	return (
		<View style={styles.view}>
			<SearchBar
				containerStyle={{ width: '90%' }}
				inputStyle={{ color: 'white', textAlign: 'center' }}
				onChange={(e) => setQuery(e.nativeEvent.text)}
				placeholder='Search a movie'
				value={query}
			/>
			<Button
				onPress={onSubmit}
				title='Search'
				type='solid'
				style={{ marginTop: 6 }}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		alignItems: 'center',
		marginTop: 50,
	},
})

export default SearchForm
