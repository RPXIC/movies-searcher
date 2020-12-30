import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

const PageNav = ({ navigation, page, query, results }) => {
	const [Prev, setPrev] = useState(false)
	const [Next, setNext] = useState(true)
	const totalPages = Math.ceil(results / 10)

	if (Prev && page === 1) setPrev(false)
	if (!Prev && page > 1) setPrev(true)
	if (Next && page === totalPages) setNext(false)
	if (!Next && page < totalPages) setNext(true)

	const handleNext = () => {
		const newPage = page + 1
		navigation.navigate('results', { page: newPage, query })
	}

	const handlePrev = () => {
		const newPage = page - 1
		navigation.navigate('results', { page: newPage, query })
	}

	return (
		<View style={styles.view}>
			<Button
				title='Prev'
				className='button-nav'
				disabled={!Prev}
				onPress={handlePrev}></Button>
			<Text style={{ color: 'white', margin: 7 }}>
				Page: {page} / {totalPages}
			</Text>
			<Button
				title='Next'
				className='button-nav'
				disabled={!Next}
				onPress={handleNext}></Button>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row',
	},
})

export default PageNav
