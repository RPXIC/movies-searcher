import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Details, Home, Results } from '../screens'

const Stack = createStackNavigator()

const HomeStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				component={Home}
				name='home'
				options={{
					title: 'Movies Searcher',
				}}
			/>
			<Stack.Screen
				component={Results}
				name='results'
				options={{
					title: 'Results',
				}}
			/>
			<Stack.Screen
				component={Details}
				name='details'
				options={{
					title: 'Details',
				}}
			/>
		</Stack.Navigator>
	)
}

export default HomeStack
