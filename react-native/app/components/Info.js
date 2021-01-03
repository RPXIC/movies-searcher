import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Info = ({ title, text }) => {
	return (
		<View style={styles.view}>
			<Text style={styles.title}>{title}:</Text>
			<Text>{text}.</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontWeight: 'bold',
	},
	view: {
		marginVertical: 5,
	},
})

export default Info
