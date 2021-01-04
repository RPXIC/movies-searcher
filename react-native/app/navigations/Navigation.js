import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import HomeStack from './HomeStack'

const Tab = createBottomTabNavigator()

const Navigation = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					tabBarIcon: () => (
						<Icon
							name='home-outline'
							size={22}
							type='material-community'
						/>
					),
				}}>
				<Tab.Screen
					component={HomeStack}
					name='home'
					options={{ title: 'Home' }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
