import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
const img = require('../../assets/bg.jpg')

const Background = ({ children }) => {
	return (
		<View style={styles.container}>
			<ImageBackground
				imageStyle={{ opacity: 0.4 }}
				source={img}
				style={styles.image}>
				{children}
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	image: {
		width: '100%',
		height: '100%',
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,1)',
	},
})

export default Background
