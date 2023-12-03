/**
 * Created by zuoxiansheng on 2/12/23
 */
import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/FoodApp/HomeScreen'
import RestaurantScreen from './screens/FoodApp/RestaurantScreen'

const Stack = createNativeStackNavigator()

export const Routes = {
  Home: 'Home',
  Restaurant: 'Restaurant',
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name={Routes.Home} component={HomeScreen}/>
        <Stack.Screen name={Routes.Restaurant} component={RestaurantScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
