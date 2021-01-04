import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

const PageNav = ({ isLoading, navigation, page, query, results }) => {
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

	if (!results)
		return (
			<View style={styles.view}>
				<Button
					className='button-nav'
					disabled={true}
					title='Prev'></Button>
				{isLoading ? (
					<ActivityIndicator size='large' style={{ margin: 7 }} />
				) : (
					<Text style={styles.text}>No Results</Text>
				)}
				<Button
					className='button-nav'
					disabled={true}
					title='Next'></Button>
			</View>
		)

	return (
		<View style={styles.view}>
			<Button
				className='button-nav'
				disabled={!Prev}
				onPress={handlePrev}
				title='Prev'></Button>
			<Text style={styles.text}>
				Page: {page} / {totalPages}
			</Text>
			<Button
				className='button-nav'
				disabled={!Next}
				onPress={handleNext}
				title='Next'></Button>
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		color: 'white',
		margin: 7,
	},
	view: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row',
	},
})

export default PageNav
