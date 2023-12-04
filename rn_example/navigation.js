/**
 * Created by zuoxiansheng on 2/12/23
 */
import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/FoodApp/HomeScreen'
import RestaurantScreen from './screens/FoodApp/RestaurantScreen'
import CartScreen from './screens/FoodApp/CartScreen'
import OrderReadyScreen from './screens/FoodApp/OrderReadyScreen'
import DeliveryScreen from './screens/FoodApp/DeliveryScreen'

const Stack = createNativeStackNavigator()

export const Routes = {
  Home: 'Home',
  Restaurant: 'Restaurant',
  CartScreen: 'CartScreen',
  OrderReadyScreen: 'OrderReadyScreen',
  DeliveryScreen: 'DeliveryScreen',
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.Home} component={HomeScreen}/>
        <Stack.Screen name={Routes.Restaurant} component={RestaurantScreen}/>
        <Stack.Screen name={Routes.CartScreen}
                      options={{presentation: 'modal'}}
                      component={CartScreen}/>
        <Stack.Screen options={{presentation: 'modal'}}
                      name={Routes.OrderReadyScreen}
                      component={OrderReadyScreen}/>
        <Stack.Screen name={Routes.DeliveryScreen} component={DeliveryScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
