import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Results } from '../screens'

const Stack = createStackNavigator()

const HomeStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='home'
				component={Home}
				options={{
					title: 'Movies Searcher',
				}}
			/>
			<Stack.Screen
				name='results'
				component={Results}
				options={{
					title: 'Results',
				}}
			/>
		</Stack.Navigator>
	)
}

export default HomeStack
